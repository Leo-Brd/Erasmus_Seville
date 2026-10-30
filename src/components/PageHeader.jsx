export default function PageHeader({ title, intro }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      <div className="page-header__rule" aria-hidden="true" />
      {intro && <p>{intro}</p>}
    </header>
  )
}
