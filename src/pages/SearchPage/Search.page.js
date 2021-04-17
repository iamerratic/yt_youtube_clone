import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import HeaderComponent from '../../components/Header/Header.component';

function SearchPage() {

    var location = useLocation();
    var queryObj = queryString.parse(location.search);
    console.log(queryObj);
    return (
        <HeaderComponent />
    )
}

export default SearchPage;
