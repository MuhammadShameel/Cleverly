// /app/components/CaseStudyModal.js
"use client";
import React, { useEffect } from "react";

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-100 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-8 relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* --- MODAL CONTENT (FIXED) --- */}

        {/* 1. Conditionally show Strategy */}
        {project._section === "strategy" && (
          <div className="mb-6">
            <h4 className="font-bold text-xl mb-2">
              {project.sections[0].title}
            </h4>
            <p className="text-gray-700 text-base">
              {project.sections[0].text}
            </p>
          </div>
        )}

        {/* 2. Conditionally show Review */}
        {project._section === "review" && (
          <div className="mb-6">
            <h4 className="font-bold text-xl mb-2">
              {project.sections[1].title}
            </h4>
            <p className="text-gray-700 text-base">
              {project.sections[1].text}
            </p>
          </div>
        )}

        {/* 3. Show Author (This part was broken) */}
        {project.author && (
          <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
            {project.rating && <FiveStarRating />}

            <div>
              <p className="font-semibold text-gray-800">
                {project.author.name}
              </p>
              <p className="text-sm text-gray-500">{project.author.role}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyModal;
