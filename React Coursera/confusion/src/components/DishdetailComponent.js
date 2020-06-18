import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderComments({comments})
    {
        const commentx = comments.map(comment =>
        {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {
                        new Intl.DateTimeFormat('en-US',
                             {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'

                            }).format(new Date(comment.date))

                    }
                    </p>
                    </li>
            );
        });
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className = 'list-unstyled'>
                    {commentx}
                </ul>
            </div>
        );
    }

    function RenderDish({dish})
    {
        if (dish != null)
         {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                       </CardBody>
                   </Card>
               </div>
            );
        }
        else
        {
            return(
               <div></div>
            );
        }
    }

    function DishDetail (props)
    {
        const dish = props.dish;
        if(dish == null)
        {
            return (<div></div>);
        }
        
        return(
            <div className='container'>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
            
        );
    }

export default DishDetail;