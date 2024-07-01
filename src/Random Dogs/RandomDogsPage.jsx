import React, { useEffect, useState } from 'react';
import styles from "./RandomDogsPage.css";
import { dogApi } from "../api";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import useStorage from "../useStorage";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
    breed: yup.string().trim().required('Breed is required').min(1, 'Please choose a breed'),
});

function RandomDogsPage(props) {
    const [dogBreeds, setDogBreeds] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const [dogImage, setDogImage] = useState("/mcho.jpg");
    const [favorites, setFavorites] = useStorage("gallery", []);

    useEffect(() => {
        dogApi("list/all", false).then(response => {
            setDogBreeds(Object.keys(response.message));
        });
    }, []);

    const onSubmit = (data) => {
        dogApi(`${data.breed}/images/random`).then(response => {
            setDogImage(response.message);
        }).catch(error => {
            console.error('Error fetching dog image:', error);
        });
    };

    const favoriteHandler = () => {
        if (!favorites.includes(dogImage)) {
            setFavorites(prev => [...prev, dogImage]);
        }
    };

    const unfavoriteHandler = () => {
        setFavorites(prev => prev.filter(image => image !== dogImage));
    };

    return (
        <div className={"pageContainer"}>
            <div style={{ position: "relative", display: "inline-block" }}>
                <div className={"goofyDog"}>
                    <img className={"img-fluid"} style={{ zIndex: 1 }} src="/dog.png" alt="" />
                    <img className={"img-fluid"} style={{ position: "absolute", left: 0, zIndex: 3 }} src="/fingers.png" alt="" />
                </div>
                <div className={"mchoContainer "}>
                    <img className={"img-fluid"} style={{ zIndex: 2, position: "absolute" }} src={dogImage} alt="" />
                </div>
            </div>

            <div className="container mt-5 formsContainer">
                <h2 className={"mt-5"}>Generate A Dog</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="breedSelect">
                        <Form.Label>Select A Breed</Form.Label>
                        <Form.Control as="select" {...register("breed")} aria-label="Select dog breed">
                            <option value="">Select a breed...</option>
                            {dogBreeds.map((breed, index) => (
                                <option key={index} value={breed}>{breed}</option>
                            ))}
                        </Form.Control>
                        {errors.breed && <p className="text-danger">{errors.breed.message}</p>}
                    </Form.Group>
                    <button type="submit" className="btn btn-primary mt-4">Generate</button>
                </Form>
                {!favorites.includes(dogImage) ?
                    <button onClick={favoriteHandler} className="btn btn-primary mt-4">Favorite</button> :
                    <button onClick={unfavoriteHandler} className="btn btn-danger mt-4">Unfavorite</button>
                }
            </div>
        </div>
    );
}

export default RandomDogsPage;
