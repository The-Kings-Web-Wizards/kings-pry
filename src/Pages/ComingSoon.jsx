import React from 'react';
import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#004d24] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white animate-float1"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-gray-800 animate-float2"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-blue-500 animate-float3"></div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            Coming Soon
          </h1>
          <p className="text-xl text-white mb-8">
            We're working hard to bring you something amazing!
          </p>
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/dxrv8lauy/image/upload/v1751268251/Logo_1_g09b1e.png" 
              alt="Coming Soon" 
              className="w-48 h-48 object-cover rounded-full shadow-lg animate-float"
            />
          </div>
          <p className="mt-6 text-white animate-wave">
            Stay tuned for updates!
          </p>
        </div>
        <div className="absolute bottom-4 right-4 animate-bounce">
          <Link 
            to="/" 
            className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 15px);
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, 10px);
          }
        }
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(5px, -10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        @keyframes wave {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s ease infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </>
  );
}

export default ComingSoon;