import logo from '../ASSETS/images/LOGO-CARTOON.png';
import {Head, Link} from '@inertiajs/react';


export default function Footer() {
  return (
    

<footer class="bg-white">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-22" alt="share the vision." />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0">
                <li>
                    <a href="/articles-grid" class="hover:underline me-4 md:me-6">Shop</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Contact</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Login</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">About Us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-black sm:mx-auto lg:my-8" />
        <span class="block text-sm text-black sm:text-center">© 2025 <a href="https://flowbite.com/" class="hover:underline">ucisee™</a>. All Rights Reserved.</span>
    </div>
</footer>



  );
}