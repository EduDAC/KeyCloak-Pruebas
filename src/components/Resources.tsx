import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import UserService from '../services/UserService';
import PropTypes from 'prop-types'
import { Button } from 'primereact/button';


export default function Resources() {

  const loginStatus = UserService.isLoggedIn();

  const descubrirRol = () => {
    if(UserService.hasRole(['user'])){
      return "user"
    }
    else if(UserService.hasRole(['editor'])){
      return "editor"
    }
    else{
      return "no Role"
    }
  }
  const rol = UserService.hasRole(['user']);

  const token= UserService.getToken();

  const userName = UserService.getUsername();


  return (
    <div className='my-12 grid place-items-center'>
      <p> Estatus de inicio de sesión:</p>
      <p> {loginStatus ? "Verdadero": "Falso"} </p>
      <p> Este es tu token:</p>
      <div className='w-175 h-40 bg-slate-200'>
        <p> {token}</p>
      </div>
      <p> Este es tu username:</p>
      <p> {userName}</p>

      <p> Este es tu rol:</p>

      <p> {descubrirRol()}</p>

      <Button onClick={() => UserService.doLogout()} label="Cerrar sesión"></Button>
      
      

    </div>
  );

}
