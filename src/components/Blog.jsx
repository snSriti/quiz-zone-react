import React from 'react';
import BlogImg from '../assets/blog.png'

const Blog = () => {
    return (
      <div>
         <div className='container'>                
                <h1 className='text-green-800 text-5xl mb-20 font-bold'>Explore some Questions</h1>
            <div className="flex  justify-between px-5 my-8">
                <div  className='w-6/12 pr-6'>
                    <img src={BlogImg} alt="" />
                </div>
                <div className="w-6/12 text-left pl-6 flex pt-8">
                    <div>
                    <h1 className='font-semibold text-3xl'>How does Context API works?</h1>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                        React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </div>
                </div>
            </div>
            <div className="flex  justify-between px-5 my-8 text-left">
            <div className='w-6/12 pr-10'>
                    <h1 className='font-semibold text-3xl'>What is the purpose of react router?</h1>
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                <div className='w-6/12 pl-6'>
                    <h1 className='font-semibold text-3xl'>What is useRef hook in react??</h1>
                    <p>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
              </div> 
            </div>
        </div>
      </div>
    );
};

export default Blog;