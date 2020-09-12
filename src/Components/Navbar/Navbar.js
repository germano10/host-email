import React, { useState, useRef, useEffect } from 'react';
import {AppBar, Toolbar, IconButton, Button, Grow, Paper, Popper, ClickAwayListener, MenuItem, MenuList, Divider} from '@material-ui/core';
import { Email, Drafts, Send, Warning, Delete, Archive, AllInbox } from '@material-ui/icons';
import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = (props) => {
    
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
    
        setOpen(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
          }
      
          prevOpen.current = open;
    }, [open]);

    return (
        <div className="navBar">
            <AppBar position="static">
                <div className="topBar">    
                    <Toolbar>
                        <Link to="/" className="navSelected">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Email />
                                    <span>Caixa de entrada</span>
                                </div>
                            </Button>
                        </Link>
                        <Link to="/rascunho">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Drafts />
                                    <span>Rascunhos</span>
                                </div>
                            </Button>
                        </Link>
                        <Link to="/enviado">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Send />
                                    <span>Enviados</span>
                                </div>
                            </Button>
                        </Link>
                        <Link to="/spam">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Warning />
                                    <span>Spam</span>
                                </div>
                            </Button>
                        </Link>
                        <Link to="/lixeira">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Delete />
                                    <span>Lixeira</span>
                                </div>
                            </Button>
                        </Link>
                        <Link to="/arquivo">
                            <Button color="inherit">
                                <div className="container-button">
                                    <Archive />
                                    <span>Arquivos</span>
                                </div>
                            </Button>
                        </Link>
                    </Toolbar>
                    <div className="selecionar-caixa-entrada">
                        <IconButton color="inherit" ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}>
                            <div className="container-button">
                                <AllInbox />
                            </div>
                        </IconButton>
                    </div>
                </div>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem selected={true} onClick={handleClose}>E-mail 1</MenuItem>
                                        <MenuItem onClick={handleClose}>E-mail 2</MenuItem>
                                        <MenuItem onClick={handleClose}>E-mail 3</MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleClose}>Novo Host</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </AppBar>
        </div>
    );
}

export default Navbar;