import React from 'react';
import { Button } from '@chakra-ui/react';

function ButtonLink(props) {
    const CustomIcon = props.icon;
    return (
        <Button leftIcon={<CustomIcon />} colorScheme={props.color} onClick={() => (window.location.href = props.link)}>
            {props.text}
        </Button>
    );
}

export default ButtonLink;
