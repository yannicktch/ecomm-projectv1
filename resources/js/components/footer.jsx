export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ucisee.shop. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Made with ❤️ by ucisee
          </p>
        </div>
      </div>
    </footer>
  );
}