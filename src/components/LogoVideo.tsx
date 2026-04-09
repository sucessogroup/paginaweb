export default function LogoVideo() {
  return (
    <div className="flex items-center justify-center overflow-hidden video-mask">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[220px] md:w-[400px] h-auto pointer-events-none select-none bg-transparent"
        style={{ 
          mixBlendMode: 'normal',
          backgroundColor: '#19373E' 
        }}
      >
        <source src="/logo3.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
