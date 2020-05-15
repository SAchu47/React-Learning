import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dishComment) {
        
        if (dishComment != null) {

            const commentContent = dishComment.comments.map((comment) => {
                return(
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>                
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    <lu className="list-unstyled">
                        { commentContent }
                    </lu>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.selectedDish) }
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(this.props.selectedDish) }
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;