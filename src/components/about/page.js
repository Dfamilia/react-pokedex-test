import React from 'react';

const Page = () => {
    return (
        <div className="col-md-8 mt-4">
            <h4> What is this? </h4>

            <p>
                This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon.
                We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities,
                types, egg groups and much, much more.
            </p>

            <h4>What is an API?</h4>
            <p>
                An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces.
                In this case, the application is a database of thousands of Pokémon-related objects, and the interfaces are URL links.
            </p>
            <p>
                A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks.
            </p>


            <h4>Aren't there 101 other Pokémon websites already?</h4>

            <p>Yes and that's exactly the problem!</p>

            <p>101 instances of the same website means 101 instances of the same data.</p>

            <p>We aim to provide a single source of data that any number of other websites can consume and use.</p>

            <p>Often, and especially when new Pokémon games or updates are released, those 101+ websites take weeks to
                update as people have to enter the same information in all those different places.
            </p>

            <p>This solves that problem. If all those sites consumed their data from here, they would have the exact same information 
                that is updated at exactly the same time, with no errors between each website. The overall benefit is a better collaboration 
                and consistency across all the different Pokémon websites and applications. It's good for all!
            </p>

        </div>
    )
}

export default Page;