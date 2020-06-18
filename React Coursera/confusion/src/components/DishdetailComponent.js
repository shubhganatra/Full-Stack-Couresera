import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component
{
    renderComments(comments)
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

    renderDish(dish)
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

    render()
    {
        const dish = this.props.dish;
        if(dish == null)
        {
            return (<div></div>);
        }
        const dishId = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
        return(
            <div className='container'>
                <div className='row'>
                    { dishId }
                    { dishComment }
                </div>
            </div>
            
        );
    }
}

export default DishDetail;