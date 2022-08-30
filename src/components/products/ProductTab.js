import React, { useState } from 'react'
import PizzaProduct from './PizzaProduct';
import BurgerProduct from './BurgerProduct';
import { Box, Tab, Tabs, Typography } from '@mui/material';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const ProductTab = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, item) => {
        setValue(item);
    };


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider',bgcolor: '#f3efef',borderRadius:"6px"}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant='fullWidth' indicatorColor="secondary">
                        <Tab label="Burger" width="50%"/>
                        <Tab label="Pizza" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <PizzaProduct />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BurgerProduct />
                </TabPanel>
            </Box>
        </>
    )
}

export default ProductTab