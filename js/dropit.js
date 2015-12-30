/*
 * Dropit v1.1.0
 * http://dev7studios.com/dropit
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

/* These styles assume you are using ul and li */
.dropit {
    list-style: none;
	padding: 0;
	margin: 0;
}
.dropit .dropit-trigger { position: relative; }
.dropit .dropit-submenu {
    position: absolute;
    top: 100%;
    left: 0; /* dropdown left or right */
    z-index: 1000;
    display: none;
    min-width: 150px;
    list-style: none;
	padding: 0;
	margin: 0;
}
.dropit .dropit-open .dropit-submenu { display: block; }