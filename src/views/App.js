import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const App = ({ children }) => (
    <main>
        {children}
    </main>
);

export default App;