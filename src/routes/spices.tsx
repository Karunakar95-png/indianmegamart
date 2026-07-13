import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/spices')({
  component: SpicesPage,
})

const spices = [
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
  { name: 'Spice Name', description: 'Short description of this spice', price: '$0.00' },
]

function SpicesPage() {
  return (
    <div style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#fff', padding: '40px 60px', textAlign: 'center', borderBottom: '1px solid #e0d8cc' }}>
        <p style={{ color: '#c0392b', fontWeight: 'bold', letterSpacing: '2px', fontSize: '13px', marginBottom: '8px' }}>
          OUR COLLECTION
        </p>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 12px' }}>Spices</h1>
        <p style={{ color: '#555', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
          Aromatic spices sourced from the finest farms across India, fresh and full of flavor.
        </p>
      </div>

      {/* Grid */}
      <div style={{ padding: '50px 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {spices.map((spice, index) => (
          <div key={index} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <div style={{ backgroundColor: '#e8ddd0', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
              🌶️
            </div>
            <div style={{ padding: '20px' }}>
              <h2 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 'bold', color: '#bbb' }}>{spice.name}</h2>
              <p style={{ color: '#bbb', margin: '0 0 16px', fontSize: '14px' }}>{spice.description}</p>
              <p style={{ color: '#bbb', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{spice.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}