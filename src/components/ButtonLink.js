import React from 'react';
import { Button, Link } from '@chakra-ui/react';

function ButtonLink(props) {
    const CustomIcon = props.icon;
    return (
        <Link href={props.link}>
            <Button leftIcon={<CustomIcon />} colorScheme={props.color}>
                {props.text}
            </Button>
        </Link>
    );
}

export default ButtonLink;
