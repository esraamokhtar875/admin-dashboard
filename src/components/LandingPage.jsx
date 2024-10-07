// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid2 as Grid, Avatar, LinearProgress } from '@mui/material';
import FoodIcon from '@mui/icons-material/Restaurant';
import CategoryIcon from '@mui/icons-material/Category';
import UserIcon from '@mui/icons-material/People';
import CookIcon from '@mui/icons-material/EmojiFoodBeverage';
import api from '../api';  // Assuming you use this to fetch data from your backend

const LandingPage = () => {
    const [foodCount, setFoodCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    // Function to fetch data counts
    const fetchCounts = () => {
        api.get('foods/')
            .then(res => setFoodCount(res.data.length))
            .catch(err => console.error(err));

        api.get('categories/')
            .then(res => setCategoryCount(res.data.length))
            .catch(err => console.error(err));

        api.get('users/')
            .then(res => setUserCount(res.data.length))
            .catch(err => console.error(err));
    };

    // Initial fetch when the component mounts
    useEffect(() => {
        fetchCounts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            {/* Welcome Card */}
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={10}>  {/* This is correct */}
                    <Card style={{ backgroundColor: '#ff7043', color: 'white', textAlign: 'center' }}>
                        <CardContent>
                            <Avatar style={{ margin: '0 auto', backgroundColor: 'white', color: '#ff7043', width: 100, height: 100 }}>
                                <CookIcon style={{ fontSize: 60 }} />
                            </Avatar>
                            <Typography variant="h4" style={{ marginTop: '20px' }}>
                                Welcome to Cook Project!
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: '10px' }}>
                                Manage your food items, categories, and users with ease.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Statistic Cards */}
            <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' }}>
                {/* Left Statistic Card */}
                <Grid item xs={12} sm={6} md={3}>  {/* item should be a boolean */}
                    <Card style={{ backgroundColor: '#e3f2fd' }}>
                        <CardContent>
                            <Typography variant="h6">Total Foods</Typography>
                            <FoodIcon style={{ fontSize: 40, color: '#42a5f5' }} />
                            <Typography variant="h4">{foodCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(foodCount / 100) * 100}
                                style={{ marginTop: '10px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Middle Statistic Card (Double Width) */}
                <Grid item xs={12} sm={12} md={6}>
                    <Card style={{ backgroundColor: '#f3e5f5' }}>
                        <CardContent>
                            <Typography variant="h6">Total Categories</Typography>
                            <CategoryIcon style={{ fontSize: 40, color: '#ab47bc' }} />
                            <Typography variant="h4">{categoryCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(categoryCount / 100) * 100}
                                style={{ marginTop: '10px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Statistic Card */}
                <Grid item xs={12} sm={6} md={3}>
                    <Card style={{ backgroundColor: '#e8f5e9' }}>
                        <CardContent>
                            <Typography variant="h6">Total Users</Typography>
                            <UserIcon style={{ fontSize: 40, color: '#66bb6a' }} />
                            <Typography variant="h4">{userCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(userCount / 100) * 100}
                                style={{ marginTop: '10px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;
