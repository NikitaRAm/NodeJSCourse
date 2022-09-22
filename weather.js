#!/usr/bin/env node 
import {getArgs} from './helpers/args.js';

const initCLI = () =>{
    const args = getArgs(process.argv);
    console.log(args);
    
    if(args.h){
        console.log();
    }
    if(args.s){
        console.log();
    }
    if(args.t){
        console.log();
    }
    
}

initCLI();