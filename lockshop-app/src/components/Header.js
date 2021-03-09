import React from 'react';

export const HeaderComponent = () => {
    return(
        <header>
            <div>
                <h1>Locksport exchange</h1>
            </div>
            <nav>
                <div>
                    <a href='lockshop-app\src\components\Home.js'><button>Home</button></a>
                    <a href='lockshop-app\src\components\Locks.js'><button>Locks</button></a>
                    <a href='lockshop-app\src\components\Picks.js'><button>Picks</button></a>
                    <a href='lockshop-app\src\components\Media.js'><button>Media</button></a>
                </div>
            </nav>
        </header>
    );
};