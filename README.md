# pagerank algorithm
pagerank is scale of importance/relevance of webpage within a set of interconnected (via hyperlinks) webpages

##### the (naive) formula for pagerank
PR(page) = sum of (pagerank of a page that link to it/number of outbound links on those pages)

- it means that a page which has a lot of link pointing to it will have a higher pagerank
- also means that a page which points to too many pages will confer a lower pagerank
- the damping factor accounts for a phenomenon known as rank sink, where a group of pages point only to each other and not to other pages outside their group, therefore pagerank accumulates within that group of pages. damping factor is therefore a probability that a user will restart from another group of webpages (thereby breaking out of the rank sink). 
- the probability  = 1 - dampingFactor
- a lower damping factor allows the pagerank to converge with lesser iterations but a higher damping factor is more practical
- from literature an acceptable damping factor is 0.85
- a set number of iterations (referred to as max_iterations) is used in this algorithm. an alternative will be to break out of the loop when the pageranks converge

## links
- [https://www.researchgate.net/publication/319663233_Discussion_on_Damping_Factor_Value_in_PageRank_Computation](https://www.researchgate.net/publication/319663233_Discussion_on_Damping_Factor_Value_in_PageRank_Computation)
- [https://www.quora.com/What-is-the-function-of-the-damping-factor-in-PageRank](https://www.quora.com/What-is-the-function-of-the-damping-factor-in-PageRank)
- [Wikipedia](https://en.wikipedia.org/wiki/PageRank#:~:text=from%20page%20v.-,Damping%20factor,random%20page%20is%201%20%2D%20d.)
- [http://www.pagerank.dk/Pagerank-formula/Damping-factor.htm](http://www.pagerank.dk/Pagerank-formula/Damping-factor.htm)
- [https://www.youtube.com/watch?v=P8Kt6Abq_rM](https://www.youtube.com/watch?v=P8Kt6Abq_rM)