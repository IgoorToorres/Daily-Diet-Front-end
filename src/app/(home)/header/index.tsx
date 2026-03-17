export default function Header() {
  return (
    <div className="flex items-center justify-between p-5">
      {/** biome-ignore lint/performance/noImgElement: <imagem ja personalizada> */}
      <img alt="logo sistema" src="/Logo.png" />
      <div>
        {/** biome-ignore lint/performance/noImgElement: <imagem ja personalizada> */}
        <img alt="profile img" src="/Ellipse.png" />
      </div>
    </div>
  )
}
