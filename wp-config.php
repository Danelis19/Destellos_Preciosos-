<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Destellos_Preciosos' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '93RdOp7E/^n_nXgg*$FhzJ9IOK}|A](mdM<|aR$R@nlH!JZV/}{DdZ WYKgnX+p?' );
define( 'SECURE_AUTH_KEY',  '{P?.yOt}t.lF%qENf]JfB<iK$(0$G/.E>O4gx4O8Kp_!u>K7[aY$<J@w_52p:)Fj' );
define( 'LOGGED_IN_KEY',    '4k]6.;6K9uDG<m&Z[=6Hc`9r3z=Z=v-d,Gc~S>P5gVd4]fQT2bIg<cKpp;,g`_Y_' );
define( 'NONCE_KEY',        'p!S3:7?N}jJr~KGV!.N6+Dt6oDZYZy Qh4.I]z b c>@F/cUN-=#i#Ik*]qWZ&jb' );
define( 'AUTH_SALT',        'KP1VlZ%o:Zo69N]|YA3$dao??-&!T~x37Zk5*>dva0WJK4>rEW)3_1Ul>OlyTy#4' );
define( 'SECURE_AUTH_SALT', '{yI}{tf!%WMMZ/vv6(Kc#F8!X=d${0[G/e}?(pzxJ ^[rSv~>Fk3.3w0E85Ht-do' );
define( 'LOGGED_IN_SALT',   '+4LL$gUI&(VO3e;&O>:b%A5JrSi`HwHmO.=80d*B$8?t%PU,9K& c7k$%Ro>d<aB' );
define( 'NONCE_SALT',       '@!t5ECg d8Z54kPt4TuaQ{.so*G*2ncuK}HXz]Iaz3];ilHA0.xXy{!P8SP=`9b~' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
