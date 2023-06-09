import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className="link" to="/product/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className="link" to="/product/1">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className="link" to="/product/1">Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                            <Link className="link" to="/product/1">Sale</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <button>
                            <Link className="link" to="/product/1">Sale</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <button>
                    <Link className="link" to="/product/1">Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories