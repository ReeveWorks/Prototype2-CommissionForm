/* styles */
import './list_temp.css'

/* functional component */
import { useEffect, useState } from 'react'

function ListT() {

  return (
    <div className='listT'>
      <div className='listT--item'>
        <div className='listT--item-bg'></div>
        <div className='listT--item-content'>
          <h3>List Item 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img src='https://i.imgur.com/b7Z2cnT.jpeg' alt='list item 1' />
      </div>
      <div className='listT--item'>
        <img style={{ marginTop: '-450px' }} src='https://lh3.googleusercontent.com/rd-d/ALs6j_GoYRa3xnh6gI9hQs9jKYxEpBWFdrLtQ08ChZhLYWZxm9IVmq-JPq7ywsEK8OiOxad-sygnQPovqTyPLPeh6i8pYGtK25gMbaNVMgq1OhDxROfTcKT71gLPzTlIHIfjATC8ZJNvNUdfUhvcYeu3UnFRxH0gVnKQQuNgKif2XkcyFALSMz2c5y3fI53tBLVgvPELx4fWoM8nYkpKwpWIT8S7fBwPEPsfC-wn3Zof1IjnIwzZ9xBRnlOZk5p250DIY61o8Lz7k93OdpRkFY9FGNRXd0rF7knV4r7iSMds97FcH7qqSJHmxN-DwgnFHRYOuOQr1Ef8TvoZcdA5YzFErm4kW_Slhu-jPhCGqegUKpA_G9wxRaZOyfLesQUzIIfqDqLuPqyUO80og6pIjKNVMBX4XMoT2CHmtsOpNjO1LrvxZNVdJkkqv96Jxb3nkY1R8EwvyBdQOOrIMrSSXlYHYXX3gy0Iwia9pzZmRpunRD2tUAPuAUm_kWOZbnAgdGNNPTYU-9teiq1dteXCEONi8ckjgHbTyGBN93Q5L68YgiwLvx1WITEyLZkPb1q1MdOW88kSRdB4Zs2qOdqjFEg7XHRJdu2vRfRZNL5w79LRyMWXyz0-fkUIY1cgOANBpOLMzYnTkcAYzY49HQNi4-gID_1IH-0svlgEMXN85Li_XN4S3iZsA5E5cXfheKpcKzjaOcgLBWTP6p1fYhXuO_Qxk9tOGoFT7jTFTClh99f4grMoPq6YdYGMnAUmoUuAl4Fm4rw1N8J6wgc_WFlWpERvFl8_WeokBMGsWlj_3c3hkpJ5t_hTc70d4L7cLwFm4iwVjC6rSy6Fvc9FeMVs2l2QEI2XLxAnOOdMJWIj-s7OpWnGO1IZrY5XQEJst-VzV-acnyYmcizm9gelkFgj9ae4A-0634ISER2OIPUw1RklRl5OBZpPD5HZ6wDap7_8ZnsAWtRDEruvZ7vkA0IKYnS0R6UXchYtbC49Q50AbkTwugYIonDdt6zlvD2Jclza2WaKuOb6GutxQmfYpqIpjnKBzILiPFDVQexjgiLFgXpcHkIvMewMOmp-gHG9N98tnD_nb9mSnz-aXsGy0dxHshKYit5r0H79uVSli_q3IA9FUWaG5J6eT2iWDaXwlaI_a0zNSBmQcCNhrRg4EXQkL6t06dEnRNTwWIszb7u0ME2q1_5SxKs=w2000-h2046?auditContext=forDisplay' alt='list item 2' />
      </div>
      <div className='listT--item'>
        List Item 3
      </div>
      <div className='listT--item'>
        List Item 4
      </div>
      <div className='listT--item'>
        List Item 5
      </div>
      <div className='listT--item'>
        List Item 6
      </div>
      <div className='listT--item'>
        List Item 7
      </div>
      <div className='listT--item'>
        List Item 8
      </div>
      <div className='listT--item'>
        List Item 9
      </div>
      <div className='listT--item'>
        List Item 10
      </div>
    </div>
  )
}

export default ListT