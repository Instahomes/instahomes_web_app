import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";

export default function About() {
    fetch("/api/realtor")
        .then((response) => {
            console.log(response.json().name)
            return response.json()
        }
        )
        .then((data) => {
            data.response();
        });
    return (
        <div>
            <section id="showcase-inner" class="py-5 text-white">
                <div class="container">
                    <div class="row text-center">
                        <div class="col-md-12">
                            <h1 class="display-4">About BT Real Estate</h1>
                            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* (Breadcrumb) */}
            <section id="bc" class="mt-3">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{% url 'index' %}">
                                    <i class="fas fa-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active"> About</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section id="about" class="py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h2>We Search For The Perfect Home</h2>
                            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, pariatur!</p>
                            <img src="../static/img/about.jpg" alt="" />
                            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse officia repudiandae ad saepe ex, amet
                            neque quod accusamus rem quia magnam magni dolorum facilis ullam minima perferendis? Exercitationem at quaerat
            commodi id libero eveniet harum perferendis laborum molestias quia.</p>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="" alt="Seller of the month" />
                                <div class="card-body">
                                    {/* removed jinja tags */}
                                    <h5 class="card-title">Seller Of The Month</h5>
                                    <h6 class="text-secondary"></h6>
                                    <p class="card-text">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" class="bg-dark text-white text-center">
                <h2 class="display-4">We Work For You</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit aperiam, unde aliquid at similique!</h4>
                <hr />
                {/* removed jinja tags */}
                <a href="" class="btn btn-secondary text-white btn-lg">View Our Featured Listings</a>
            </section>

            <section id="team" class="py-5">
                <div class="container">
                    <h2 class="text-center">Our Team</h2>
                    <div class="row text-center">
                        <div class="col-md-4">
                            {/* removed jinja tags */}
                            <img src="" alt="" class="rounded-circle mb-3" />
                            <h4></h4>
                            <p class="text-success">
                                <i class="fas fa-award text-success mb-3"></i> Realtor</p>
                            <hr />
                            <p>
                                <i class="fas fa-phone"></i></p>
                            <p>
                                <i class="fas fa-envelope-open"></i></p>
                        </div>
                        <div class="col-md-12">
                            <p>No Realtors Available</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}