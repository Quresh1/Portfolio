export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Shahab Quresh, All rights reserved.</p>
      </div>
    </footer>
  )
}