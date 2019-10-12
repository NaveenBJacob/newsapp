import navigator from './src/appnavigation';
import React,{Components} from 'react';

import {createAppContainer} from 'react-navigation';

const Navigation=createAppContainer(navigator);

export default Navigation;