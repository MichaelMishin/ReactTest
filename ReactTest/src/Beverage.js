import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Beverage = () => (
    <div>
        <FontAwesomeIcon icon="check-square" />
        Your <FontAwesomeIcon icon={["fas", "coffee"]} /> is hot and ready!
    </div>
)