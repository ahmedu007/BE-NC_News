<h1>NC News (Backend)</h1>
    <h2><em>by <strong>Umair Ahmed</strong></em></h2>

```
https://umair-ncnews-be.herokuapp.com/
```


<h3>
        <ins>API Endpoints</ins>
    </h3>

<p>All of these API's return a JSON object</p>

<ul>

<li>
<strong>GET</strong>
<em>/api/topics</em>
<p>Returns all the topics</p>
</li>

<br />

<li>
<strong>GET</strong>
<em>/api/topics/:topic/articles</em>
<p>Returns all the articles for a certain topic</p>
</li>

<br />

<li>
<strong>GET</strong>
<em>/api/articles</em>
<p>Returns all the articles</p>
</li>

<br />

<li>
<strong>GET</strong>
<em>/api/articles/:article_id</em>
<p>Returns the specified article</p>
</li>

<br />

<li>
<strong>GET</strong>
<em>/api/articles/:article_id/comments</em>
<p>Returns all the comments for a individual article</p>
</li>

<br />

<li>
<strong>GET</strong>
<em>/api/users/:username</em>
<p>Returns a JSON object with the profile data for the specified user.</p>
</li>

<br />

<li>
<strong>POST</strong>
<em>/api/articles/:article_id/comments</em>
<p>Adds a new comment to an article. This route requires a
<strong>JSON body</strong> with a
<strong>comment</strong> key and value pair</p>
</li>

<br />

<li>
<strong>PUT</strong>
<em>/api/articles/:article_id</em>
<p>Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down'
<p>e.g:
<em>/api/articles/:article_id?vote=up</em>
</p>
</p>
</li>

<br />

<li>
<strong>PUT</strong>
<em>/api/comments/:comment_id</em>
<p>Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down'
<p>e.g:
<em>/api/comments/:comment_id?vote=down</em>
</p>
</p>
</li>

<br />

<li>
<strong>DELETE</strong>
<em>/api/comments/:comment_id</em>
<p>Deletes a comment if the comment was created by the Northcoder user
</p>
</li>

</ul>
