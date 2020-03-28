import React from 'react';
import Helmet from 'react-helmet';
import Index from '../components/template/Index';

const IndexPage: React.FC = () => (
    <>
        <Helmet>
            <title>Gatsby.js + MaterialUI + TypeScript</title>
        </Helmet>
        <Index />
    </>
);
export default IndexPage;
