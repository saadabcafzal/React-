import React from 'react'

const FooterSection = () => {
  return (
    <footer 
    className="-mt-[400px] md:-mt-[300px]">
     <div className="w-10/12 pt-[400px] pb-10 md:pt-[300px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto px-[30px] flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
       {/* <!-- column - 1 --> */}
       <div className="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
         <img src="https://ik.imagekit.io/s73rwtf12h/app/uploads/2021/10/Website-logo-01.png" alt=""
         width="120px"
         height="24px"
         loading="lazy"
         />
         <p className="font-mullish text-sm text-grayText my-3">
         Our company profile provides all the information you need.

At Fugen Services, we have a team of professionals who understand the needs of your business. Through top-notch web applications, mobile applications, digital marketing and branding solutions, we help you maximize your profits.
         </p>
         <p className="font-mullish text-sm text-grayText my-3">
         A Fugen Software and Software Development company that offers real-world business solutions, Fugen Services creates first-hand software and software development software.
         </p>
         <p className="font-mullish text-sm text-grayText my-3">
         our websites are meant to make your business more reachable. We provide users with one of the best user experience using a wide range of tools that can vary from being a simple CMS for a website, to custom-built applications and web portals. The websites we deliver are of high-quality web design and easy to use and manage.

With over more than 10 years of experience developing upon the top CMS platforms and a well-honed project management process, Fugen Services can help you build high-performing websites for a wide range of brands. We’ve overcome all kinds of web development challenges for our clients, helping them achieve exceptional results and an outstanding brand image.
         </p>
         <p className="font-mullish text-[0.625rem] text-grayText my-3">
         Our Expert Web Developers Help You Create The Best Experience

We have a team of experts and developers who will help you make your business a success by making it more accessible. Our web design and development packages are designed to get you an engaging and functional website at an affordable rate. Our best website development projects use the best platforms that keep your business secure.

Web Development That Aligns With Your Business

We as a website development firm can help you by creating a website by getting you a high-quality bespoke website and application according to your business needs.

Free Flow Of Website Development Ideas Through Transparency And Communication

We provide and build products keeping in view your ideas and need you to stay in the loop for transparency and clear updates in the loop on every stage of the development process.
         </p>
         <p className="font-mullish uppercase font-bold text-gray2 my-3">
           Subscribe to the newspaper
         </p>
         <form className="relative bg-white w-[240px] mt-2 mb-4">
           <input
           placeholder="Your email address"
           className="pr-16 font-mullish border-gray-300 outline-lightBlue focus:outline-lightBlue placeholder:text-sm py-2 px-4 
           border rounded-sm transition-all duration-200"
         />

           <button className="h-[90%] bg-white absolute right-[0.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200"
           >
             Subscribe
             <svg
             viewBox="0 0 24 24"
             focusable="false"
             className="w-[14px] h-[14px] ml-3"
           >
             <path
               fill="currentColor"
               d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
             ></path>
           </svg>
           </button>
         </form>
         <div className="flex items-start space-x-4">
           <img src="https://razorpay.com/build/browser/static/pci-compliant.f0aea468.png" alt=""
           width="92px"
           height="40px"
           loading="lazy"/>
           <img src="https://razorpay.com/build/browser/static/iso-certified.4fd701ec.jpg" alt=""
           loading="lazy"
           height="80px"
           width="92px"/>


         </div>
       </div>
       {/* <!-- column - 2 --> */}
       <div className="flex  flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
         {/* <!-- Sub-column - 1 --> */}
         <div className="space-y-3">
           <div className='flex  flex-col'>
             <p className="font-mullish uppercase font-bold text-gray2 mb-1">
             Menu
             </p>
             <ul className="space-y-2">
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                Home
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                About Us
               </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Case Study
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Blog
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                  Privacy Policy
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Terms and Condition
                   <span
                   className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1">
                     New
                   </span>
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                  Privacy Policy
                 </a>
               </li>
             </ul>
           </div>
          
           
         </div>
         {/* <!-- Sub-Column - 2 --> */}
         <div>
           <div>
             <p className="font-mullish uppercase font-bold text-gray2 mb-1">
             Services
             </p>
             <ul className="space-y-2">
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Android App Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   iOS App Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Mobile App Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   React Native Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Wearable App Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   App Store Optimization
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Flutter App Development
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Game App Development
                 </a>
               </li>
             </ul>
           </div>
           
         </div>
         {/* <!-- Sub-column 3 --> */}
         <div>
           <div>
             <p className="font-mullish uppercase font-bold text-gray2 mb-1">
               COMPANY
             </p>
             <ul className="space-y-2">
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   About Us
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Careers
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Teams of Use
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Privacy Policy
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Grievance Redressal
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Partners
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   White papers
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Responsive Discloser
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Corporate Information
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <p className="font-mullish uppercase font-bold text-gray2 mb-1">
               HELP & SUPPORT
             </p>
             <ul className="space-y-2">
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Support
                 </a>
               </li>
               <li>
                 <a href="#"
                 className="font-mullisg font-medium text-lightBlue500 hover:text-grayText transition-all duration-200">
                   Knowledge
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <p className="font-mullish uppercase font-bold text-gray2 mb-1">
               FIND US ONLINE
             </p>
             <ul className="flex space-x-4 items-center mt-4">
               <li className="cursor-pointer">
                 <a>
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU6VZ////80UZ309vqToMfM0uQyT5xbcK0uTZyXpMu5wNna3eni5fB0hLdida5SaqogRJjq7PRNZaehq80oSZpAW6NqfbN7i7qwudW+xdzGzeERPJRIYKSpss+LmcTU2OfuBL5hAAAC6klEQVR4nO3c23KrIACFYYuKxmM8RGu2ie//lm3vOtNNQDLA0ln/fWf4xgNGsFHEGGOMMcYYY4wxxtj5EkLmL5Khx2eaGK+juPXZVKubbqFHaVR+jebHZ7Hct7JS1qWtCD1QbfJfPhdbF3/oqjL0Ey2X02IAOQImF3VqBDkARtaLMQUbI0RTdDssyBhxe5Z7KMgYuQ67DgsyRrafZrewA2DEZH4TQ8fIZuflAoyR62ZhAcWMe2YXcMz1YWWBxIyJnQURk9d75xdcjOzvlhZATPTcPVnCYkRrMVuiYvKL9YGBw8jMarrExIyDvQUNI+xvZXiYvLa/YuAw0TtnGRjmvbMMDTPZPskAYqLknUvmo4PC3ArDYcfVlv6t6IHeNYvV7FGmHOYma//Whwb8TvQmv/y7pI+klOI/hQb8TrSVwWHJJNSglTV6TNrnoUdpltT/xiyng1giOevuzPEl9BiNk9ppJs2Ocb18J3SYeDjGEuxPWkw3H+bA6DHVYS5/A8zWID18vU6LSaGeJF9HDGrEoEYMasSgRgxqxKBGDGrEoEYMasQETvnZyKjHjK8+OfH/Uk2s80VRotsAWA2J6m9/arxrpMG6hWVP768I7TbGGjWfCFNN3m8P7jCb//UOd5i7/5Vzd5jCN8Ul5uF/nnGHGU6EiZ/+n3WcYar5RJhyOtFpFmCacYe5ryfCLLfzYOJHgA0PzjAhttW4wnTPALs3XGGq+kyYELs3XGG29kSYJcQ+YEeY+HP1b3GGGQJYnGGSEPvqXGH8v2dyh+nqE2HKIJsEHWHuIaYZV5giwA8AZ5gA75kiZ6sAjzEERrRDoUr39Wy3KP80yJ35O+XK11X3wXnaXg/zj9q0HzYArmkqO+ICrTJiUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY1YlAjBjViUCMGNWJQIwY155gvTt5IUAsJbbkAAAAASUVORK5CYII=" alt=""
                   width="24px"
                   height="24px"
                   loading="lazy"/>
                 </a>
               </li>
               <li className="cursor-pointer">
                 <a>
                   <img src="data:image/png;base64,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" alt=""
                   width="24px"
                   height="24px"
                   loading="lazy"/>
                 </a>
               </li>
               <li className="cursor-pointer">
                 <a>
                   <img src="data:image/jpeg;base64,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" alt=""
                   width="24px"
                   height="24px"
                   loading="lazy"/>
                 </a>
               </li>
               <li className="cursor-pointer">
                 <a>
                   <img src="data:image/png;base64,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" alt=""
                   width="24px"
                   height="24px"
                   loading="lazy"/>
                 </a>
               </li>
               <li className="cursor-pointer">
                 <a>
                   <img src="data:image/png;base64,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" alt=""
                   width="24px"
                   height="24px"
                   loading="lazy"/>
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <p className="font-mullish font-bold text-gray2 uppercase mb-1 mt-6 ">
               REGD. OFFICE ADDRESS
             </p>
             <p className="font-mullish text-sm mt-4 whitespace-nowrap">
             Suite # A303,  Blossom Trade,<br/>
             Center, Opposite NED, Main,<br/>
             university road, Karachi.<br/>
             </p>
             <div className="font-mullish mt-6">
               <p className="text-sm">© Fugen Sevices 2023</p>
               <p className="text-sm">All Rights Reserved</p>
             </div>
           </div>
         </div>              
       </div>
     </div>
   </footer>
 
  )
}

export default FooterSection