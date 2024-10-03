export const slideStyles = {
  wrapper: "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen w-full flex items-center justify-center p-8",
  container: "bg-black bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl p-12 transition-all duration-500 ease-in-out flex flex-col h-[800px]", // Set a fixed height
  header: "flex flex-col items-center mb-8",
  title: "text-6xl font-bold mb-4 text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500",
  subtitle: "text-3xl font-semibold mb-6 text-blue-300 text-center",
  contentWrapper: "flex-grow overflow-y-auto", // Allow scrolling if content overflows
  content: "text-3xl mb-8 text-gray-100 text-center italic", // Increased font size from 2xl to 3xl
  bulletList: "space-y-4 mb-12",
  bulletPoint: "flex items-start text-2xl text-gray-200", // Increased font size from xl to 2xl
  bulletIcon: "w-8 h-8 text-blue-400 mr-3 flex-shrink-0", // Prevent icon from shrinking
  bulletDot: "mr-4 text-green-400 text-3xl leading-none flex-shrink-0", // Prevent dot from shrinking
  footer: "mt-auto pt-4 flex justify-end", // Push to bottom and align right
  navigationText: "text-gray-300 text-xl"
};