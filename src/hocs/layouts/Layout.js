import React from 'react';
import { connect } from 'react-redux';

function Layout(props) {
    const { children } = props; // Desestructurar `children` desde `props`

    return (
        <div>
            {children}
        </div>
    );
}

const mapStateToProps = (state) => ({
    // Aquí puedes mapear el estado de Redux a props si es necesario
});

export default connect(mapStateToProps)(Layout);
