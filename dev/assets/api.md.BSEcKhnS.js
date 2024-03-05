import{_ as e,c as s,o as i,a7 as a}from"./chunks/framework.DxOb5A5L.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md","lastUpdated":null}'),t={name:"api.md"},o=a(`<h2 id="API" tabindex="-1">API <a class="header-anchor" href="#API" aria-label="Permalink to &quot;API {#API}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Tyler.Interpolator" href="#Tyler.Interpolator">#</a> <b><u>Tyler.Interpolator</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Interpolator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AbstractProvider</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Interpolator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f; colormap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:thermal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:minzoom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:maxzoom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><p>Provides tiles by interpolating them on the fly.</p><ul><li><p><code>f</code>: an Interpolations.jl interpolator or similar.</p></li><li><p><code>colormap</code>: A <code>Symbol</code> or <code>Vector{RGBA{Float32}}</code>. Default is <code>:thermal</code>.</p></li></ul><p><a href="https://github.com/MakieOrg/Tyler.jl/blob/524269b2922a9982bc2119f3c60691cf851a4bd2/src/interpolations.jl#L2-L11" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Tyler.Map" href="#Tyler.Map">#</a> <b><u>Tyler.Map</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Map</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(extent, [extent_crs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wgs84]; kw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Tylers main object, it plots tiles onto a Makie.jl <code>Axis</code>, downloading and plotting more tiles as you zoom and pan.</p><p><strong>Arguments</strong></p><p>-<code>extent</code>: the initial extent of the map, as a <code>GeometryBasics.Rect</code> or an <code>Extents.Extent</code> in the projection of <code>extent_crs</code>. -<code>extent_crs</code>: Any <code>GeoFormatTypes</code> compatible crs, the default is wsg84.</p><p><strong>Keywords</strong></p><p>-<code>resolution</code>: The figure resolution. -<code>figure</code>: an existing <code>Makie.Figure</code> object. -<code>crs</code>: The providers coordinate reference system. -<code>provider</code>: a TileProviders.jl <code>Provider</code>. -<code>max_parallel_downloads</code>: limits the attempted simultaneous downloads, with a default of <code>16</code>. -<code>cache_size_gb</code>: limits the cache for storing tiles, with a default of <code>5</code>. -<code>depth</code>: the number of layers to load when zooming. Lower numbers will be slightly faster but have more artefacts. The default is <code>8</code>. -<code>halo</code>: The fraction of the width of tiles to add as a halo so that panning is smooth - the tiles will already be loaded. The default is <code>0.2</code>, which means <code>0.1</code> on each side. -<code>scale</code>: a tile scaling factor. Low number decrease the downloads but reduce the resolution. The default is <code>1.0</code>.</p><p><a href="https://github.com/MakieOrg/Tyler.jl/blob/524269b2922a9982bc2119f3c60691cf851a4bd2/src/Tyler.jl#L20-L48" target="_blank" rel="noreferrer">source</a></p></div><br>`,5),l=[o];function r(d,n,p,h,c,k){return i(),s("div",null,l)}const u=e(t,[["render",r]]);export{y as __pageData,u as default};