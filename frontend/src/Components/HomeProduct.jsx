import React from 'react'
import Card from 'react-bootstrap/Card';
function HomeProduct({data}) {
   
  return (
    <>
        {
            data.map((produit,i)=>{
                return (
                   <div className='col-4 col-sm-6 col-md-3 my-2'>
                    <br />
                    <br />
                     <Card key={i} style={{ width:'23vw',height:"60vh"}} >
                    <Card.Img variant="top" src={produit.img} className='img-fluid' />
                    <Card.Body>
                      <Card.Title> {produit.Title} </Card.Title>
                      <Card.Text>
                       { produit.Desc.slice(1,150) }
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted"> { produit.Price } DH </small>
                    </Card.Footer>
                  </Card>
                   </div>
                )
            })
        }
       
      
    </>
  )
}

export default HomeProduct