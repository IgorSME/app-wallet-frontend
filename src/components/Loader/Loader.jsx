import { Circles } from 'react-loader-spinner';
import { Loader } from "./Loader.styled";

export default Loader = () => {
    return (
        <Loader>
            <Circles color="#24CCA7" height="80" width="80" ariaLabel="circles" />{' '}
        </Loader>
    );
};