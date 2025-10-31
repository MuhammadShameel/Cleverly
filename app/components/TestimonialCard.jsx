import VideoPlayer from "./VideoPlayer";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-[20px] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
      <VideoPlayer
        videoUrl={testimonial.videoUrl}
        thumbnail={testimonial.thumbnail}
      />
    </div>
  );
}
