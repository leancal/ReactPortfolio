import React from 'react'
import CV from '../../assets/docs/LEANDRO-CALVET-C.pdf'
import CVen from '../../assets/docs/Leandro-Calvet-En.pdf'

function CTA() {
  return (
    <div className='cts' >
        <a href={CV} download className='btn'>Download CV (Spanish Version)</a>
        <a href={CVen} download className='btn'>Download CV (English Version)</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA