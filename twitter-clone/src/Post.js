import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material/";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
        <div className="post__headerText">
            <h3>Noni Venus <span>
                </span><VerifiedUserIcon className="post_badge"/></h3>
        </div>
        <div className="post__headerDescription">
<p>Let's Have Some Fun</p>
        </div>
        </div>
        <img src={image} alt="" />
        </div>

    </div>
  );
}

export default Post;
