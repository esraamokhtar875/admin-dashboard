// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, LinearProgress, useTheme } from '@mui/material'; // Added useTheme
import FoodIcon from '@mui/icons-material/Restaurant';
import CategoryIcon from '@mui/icons-material/Category';
import UserIcon from '@mui/icons-material/People';
import CookIcon from '@mui/icons-material/EmojiFoodBeverage';
import api from '../api';  // Assuming you use this to fetch data from your backend

const LandingPage = () => {
    const [foodCount, setFoodCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    const theme = useTheme(); // Get the current theme

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
        <div style={{ padding: '10px' }}> {/* Reduced padding for more compact layout */}
            {/* Welcome Card */}
            <Grid container spacing={2} justifyContent="center" > {/* Add 50px margin on left and right */}
                <Grid item xs={12} md={8}>  {/* Adjusted width */}
                    <Card
                        sx={{
                            backgroundColor: theme.palette.background.paper,  // Use theme background color
                            color: theme.palette.text.primary,                // Use theme text color
                            textAlign: 'center',
                            padding: '40px 30px',
                            width: '100%',
                        }}
                    >
                        <CardContent>
                            <Avatar sx={{ margin: '0 auto', backgroundColor: 'white', color: theme.palette.primary.main, width: 120, height: 120 }}> {/* Increased avatar size */}
                                <CookIcon sx={{ fontSize: 70 }} /> {/* Larger icon */}
                            </Avatar>
                            <Typography variant="h4" sx={{ marginTop: '20px' }}>
                                Welcome to Cook Project!
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: '10px' }}>
                                Manage your food items, categories, and users with ease.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Statistic Cards */}
            <Grid container spacing={2} justifyContent="center" sx={{ marginLeft: '10px', marginRight: '10px', marginTop: '20px' }}>
                {/* Left Statistic Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            backgroundColor: theme.palette.background.paper,  // Use theme background color
                            height: '300px',
                            width: '100%',
                            color: theme.palette.text.primary,                // Use theme text color
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">Total Foods</Typography>
                            <FoodIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} /> {/* Use theme's primary color */}
                            <Typography variant="h4" sx={{ marginTop: '10px' }}>{foodCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                backgroundColor= "blue"
                                value={(foodCount / 100) * 100}
                                sx={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Middle Statistic Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            backgroundColor: theme.palette.background.paper,  // Use theme background color
                            height: '300px',
                            width: '100%',
                            color: theme.palette.text.primary,                // Use theme text color
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">Total Categories</Typography>
                            <CategoryIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} /> {/* Use theme's secondary color */}
                            <Typography variant="h4" sx={{ marginTop: '10px' }}>{categoryCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(categoryCount / 100) * 100}
                                sx={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Statistic Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        sx={{
                            backgroundColor: theme.palette.background.paper,  // Use theme background color
                            height: '300px',
                            width: '100%',
                            color: theme.palette.text.primary,                // Use theme text color
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">Total Users</Typography>
                            <UserIcon sx={{ fontSize: 50, color: theme.palette.success.main }} /> {/* Use theme's success color */}
                            <Typography variant="h4" sx={{ marginTop: '10px' }}>{userCount}</Typography>
                            <LinearProgress
                                variant="determinate"
                                value={(userCount / 100) * 100}
                                sx={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;









//// @ts-nocheck
//import React, { useEffect, useState } from 'react';
//import { Card, CardContent, Typography, Grid2 as Grid, Avatar, LinearProgress } from '@mui/material';
//import FoodIcon from '@mui/icons-material/Restaurant';
//import CategoryIcon from '@mui/icons-material/Category';
//import UserIcon from '@mui/icons-material/People';
//import CookIcon from '@mui/icons-material/EmojiFoodBeverage';
//import api from '../api';  // Assuming you use this to fetch data from your backend
//
//const LandingPage = () => {
//    const [foodCount, setFoodCount] = useState(0);
//    const [categoryCount, setCategoryCount] = useState(0);
//    const [userCount, setUserCount] = useState(0);
//
//    // Function to fetch data counts
//    const fetchCounts = () => {
//        api.get('foods/')
//            .then(res => setFoodCount(res.data.length))
//            .catch(err => console.error(err));
//
//        api.get('categories/')
//            .then(res => setCategoryCount(res.data.length))
//            .catch(err => console.error(err));
//
//        api.get('users/')
//            .then(res => setUserCount(res.data.length))
//            .catch(err => console.error(err));
//    };
//
//    // Initial fetch when the component mounts
//    useEffect(() => {
//        fetchCounts();
//    }, []);
//
//    return (
//        <div style={{ padding: '10px' }}> {/* Reduced padding for more compact layout */}
//            {/* Welcome Card */}
//            <Grid container spacing={2} justifyContent="center" sx={{ marginLeft: '50px', marginRight: '50px' }}> {/* Add 50px margin on left and right */}
//                <Grid item xs={12} md={8}>  {/* Adjusted width */}
//                    <Card style={{ backgroundColor: '#f3e5f5', color: 'black', textAlign: 'center', padding: '40px 30px', width: '100%' }}> {/* Adjusted width and padding */}
//                        <CardContent>
//                            <Avatar style={{ margin: '0 auto', backgroundColor: 'white', color: '#ab47bc', width: 120, height: 120 }}> {/* Increased avatar size */}
//                                <CookIcon style={{ fontSize: 70 }} /> {/* Larger icon */}
//                            </Avatar>
//                            <Typography variant="h4" style={{ marginTop: '20px' }}>
//                                Welcome to Cook Project!
//                            </Typography>
//                            <Typography variant="body1" style={{ marginTop: '10px' }}>
//                                Manage your food items, categories, and users with ease.
//                            </Typography>
//                        </CardContent>
//                    </Card>
//                </Grid>
//            </Grid>
//
//            {/* Statistic Cards */}
//            <Grid container spacing={2} justifyContent="center" sx={{ marginLeft: '50px', marginRight: '50px', marginTop: '20px' }}> {/* Add 50px margin on left and right */}
//                {/* Left Statistic Card */}
//                <Grid item xs={12} sm={6} md={4}> {/* Adjusted to make each card wider */}
//                    <Card style={{ backgroundColor: '#e3f2fd', height: '300px', width: '100%' }}> {/* Increased height and width */}
//                        <CardContent>
//                            <Typography variant="h6">Total Foods</Typography>
//                            <FoodIcon style={{ fontSize: 50, color: '#42a5f5' }} /> {/* Increased icon size */}
//                            <Typography variant="h4" style={{ marginTop: '10px' }}>{foodCount}</Typography>
//                            <LinearProgress
//                                variant="determinate"
//                                value={(foodCount / 100) * 100}
//                                style={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
//                            />
//                        </CardContent>
//                    </Card>
//                </Grid>
//
//                {/* Middle Statistic Card */}
//                <Grid item xs={12} sm={6} md={4}> {/* Adjusted to make the card wider */}
//                    <Card style={{ backgroundColor: '#f3e5f5', height: '300px', width: '100%' }}> {/* Increased height and width */}
//                        <CardContent>
//                            <Typography variant="h6">Total Categories</Typography>
//                            <CategoryIcon style={{ fontSize: 50, color: '#ab47bc' }} /> {/* Increased icon size */}
//                            <Typography variant="h4" style={{ marginTop: '10px' }}>{categoryCount}</Typography>
//                            <LinearProgress
//                                variant="determinate"
//                                value={(categoryCount / 100) * 100}
//                                style={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
//                            />
//                        </CardContent>
//                    </Card>
//                </Grid>
//
//                {/* Right Statistic Card */}
//                <Grid item xs={12} sm={6} md={4}> {/* Adjusted to make each card wider */}
//                    <Card style={{ backgroundColor: '#e8f5e9', height: '300px', width: '100%' }}> {/* Increased height and width */}
//                        <CardContent>
//                            <Typography variant="h6">Total Users</Typography>
//                            <UserIcon style={{ fontSize: 50, color: '#66bb6a' }} /> {/* Increased icon size */}
//                            <Typography variant="h4" style={{ marginTop: '10px' }}>{userCount}</Typography>
//                            <LinearProgress
//                                variant="determinate"
//                                value={(userCount / 100) * 100}
//                                style={{ marginTop: '15px', height: '10px', borderRadius: '5px' }}
//                            />
//                        </CardContent>
//                    </Card>
//                </Grid>
//            </Grid>
//        </div>
//    );
//};
//
//export default LandingPage;
//










