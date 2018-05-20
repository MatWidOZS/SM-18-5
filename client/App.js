// component?
import React, { Component } from 'react';
import io from 'socket.io-client';
import styles from './App.css';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UsersList from './UsersList';
import UserForm from './UserForm';

const socket = io('/');
