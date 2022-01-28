var ProduPressAdsManager = (function () {
	var PAGE_INFO, reloadTimeout = 10,
		__PDPADS, host_url = "//static.produpress.be/js/";

	function loadScript(url, asnc, callback) {
		var script = document.createElement("script");
		script.async = asnc;
		script.src = url;
		document.body.appendChild(script);
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (this.readyState == "loaded" || this.readyState == "complete") {
					this.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = callback;
		}
		script.onerror = function () {
			throw ("Error while loading the library");
		};
	} // END LOADSCRIPT
	return function () {
		var self = this,
			_top, sess_storage, loc_storage, device_detection, __PDPADS, adsConfig, getKvsSource, pdpAds, kvsObj, kvs, pixels, addSticky, sizes;
		this.config = {};
		this.start = function start(settings) {
			this.config.page_config = settings;
			loadScript(host_url + 'v5/library.js', true, this.manage.bind(this));
		}; // END START
		this.manage = function manage() {
			_top = ProduPressAds.frameObj();
			urlpath = document.location.pathname;
			sess_storage = ProduPressAds.storage('session');
			loc_storage = ProduPressAds.storage();
			device_detection = loc_storage.get("pdp_device_settings");
			kvsObj = sess_storage.get('pdp_kvs_source');
			kvs = new this.kvs();
			kvs.init();
			sizes = ProduPressAdsManager.defineSizes();
			pixels = new this.pixels();
			addSticky = self.addSticky();

			adsConfig = {
				sitecode: "",
				placements: {
					"immoweb_fr": {
						default: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											['fluid']
										],
										responsive: [
											[
												[1024, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[768, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[480, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle3: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90],
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertybuy: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertyrent: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						}
					},
					"immoweb_nl": {
						default: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											['fluid']
										],
										responsive: [
											[
												[1024, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[768, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[480, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle3: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90],
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertybuy: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertyrent: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						}
					},
					"immoweb_en": {
						default: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											['fluid']
										],
										responsive: [
											[
												[1024, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[768, 0],
												[
													['fluid'],
													[400, 300]
												]
											],
											[
												[480, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													['fluid'],
													[400, 300],
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								},
								middle3: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90],
										],
										responsive: [
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner", "native"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertybuy: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						},
						propertyrent: {
							horizontal: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								},
								middle2: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 250],
											[320, 50],
											[320, 100],
											[468, 60],
											[728, 90]
										],
										responsive: [
											[
												[1024, 0],
												[
													[728, 90],
													[468, 60]
												]
											],
											[
												[768, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100],
													[468, 60]
												]
											],
											[
												[480, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											],
											[
												[320, 0],
												[
													[300, 250],
													[320, 50],
													[320, 100]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							},
							rectangle: {
								middle: {
									viewability: {
										isviewable: true,
										viewport: 50
									},
									sizes: {
										default: [
											[300, 600],
											[300, 250],
											[160, 600],
											[120, 600]
										],
										responsive: [
											[
												[1024, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[768, 0],
												[
													[300, 600],
													[300, 250],
													[160, 600],
													[120, 600]
												]
											],
											[
												[480, 0],
												[
													[300, 250]
												]
											],
											[
												[320, 0],
												[
													[300, 250]
												]
											]
										]
									},
									outofpage: false,
									mediatype: ["banner"]
								}
							}
						}
					},
				},
				keywords: "",
				keyvalues: (function () {
					var str = "";
					var visit_hot = loc_storage.get("visit_hotness");
					var visit_fase = loc_storage.get("visit_fase");
					var urlsearch = ProduPressAds.urlSearch();
					str += ('page_config' in self.config ? self.config.page_config.kvs : "");
					str += (visit_hot ? 'visithotness=' + visit_hot + ';' : 'visithotness=0;');
					str += (visit_fase ? 'visitfase=' + visit_fase + ';' : 'visitfase=0;');
					str += (urlsearch ? urlsearch + ';' : '');
					str += (sizes && sizes.type ? 'screensize_class=' + sizes.type + ';' : '');
					return str;
				})(),
				env: ('page_config' in self.config ? self.config.page_config.env : ""),
				filter: "",
				gdpr: self.gdpr(),
				lazyLoading: {
					active: true,
					params: {
						fetchMarginPercent: 100,
						renderMarginPercent: 5,
						mobileScaling: 2.0
					}
				},
				headerbidding: {
					prebid: {
						active: self.config.page_config.data['produpress.rtb'] === "true" ? Boolean(self.config.page_config.data['produpress.rtb']) : false,
						url: host_url + "prebid/4.12.0/prebid.js",
						country: window.PDPCOUNTRY,
						gdpr: {
							cmpApi: 'static',
							consentData: {
								getTCData: {
									tcString: (self.config.page_config.data['userCentrics.produpress'] === "true" ? self.config.page_config.consentData.consentString[self.config.page_config.language] : ""),
									gdprApplies: true
								}
							}
						},
						timeout: 1000,
						config: {
							rubicon: [{
								accountid: "13206",
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54900",
										zoneid: "256444"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54900",
										zoneid: "256444"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54900",
										zoneid: "256444"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54902",
										zoneid: "256464"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54902",
										zoneid: "256464"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54902",
										zoneid: "256464"
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54904",
										zoneid: "256474"
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54904",
										zoneid: "256474"
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "54904",
										zoneid: "256474"
									}
								}
							}], // rubicon
							pubmatic: [{
								accountid: "46076",
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "2601455"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "2601455"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "1497081"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497089"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497091"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497093"
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497101"
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497103"
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497105"
									}
								}
							}, {
								accountid: "46076",
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "2601455"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "1497079"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "1497081"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497089"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497091"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497093"
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497101"
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497103"
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497105"
									}
								}
							}, {
								accountid: "46076",
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "2601456"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "1497079"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302444",
										zoneid: "1497081"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497089"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497091"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302385",
										zoneid: "1497093"
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497101"
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497103"
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "302446",
										zoneid: "1497105"
									}
								}
							}], // pubmatic							
							teads: [{
								placements: {
									"immoweb_fr-resultgallerybuy-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130829"
									},
									"immoweb_fr-resultgallerybuy-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130829"
									},
									"immoweb_fr-resultgalleryrent-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130829"
									},
									"immoweb_fr-resultgalleryrent-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130829"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130830"
									},
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130829"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120626",
										zoneid: "130830"
									},
									"immoweb_nl-resultgallerybuy-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130832"
									},
									"immoweb_nl-resultgallerybuy-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130832"
									},
									"immoweb_nl-resultgalleryrent-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130832"
									},
									"immoweb_nl-resultgalleryrent-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130832"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130831"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130832"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120627",
										zoneid: "130831"
									},
									"immoweb_en-resultgallerybuy-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130834"
									},
									"immoweb_en-resultgallerybuy-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130834"
									},
									"immoweb_en-resultgalleryrent-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130834"
									},
									"immoweb_en-resultgalleryrent-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130834"
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130833"
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130834"
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "120628",
										zoneid: "130833"
									}
								}
							}], // Teads
							proxistore: [{
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/fr",
										zoneid: "fr"
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/fr",
										zoneid: "fr"
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/nl",
										zoneid: "nl"
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/nl",
										zoneid: "nl"
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/fr",
										zoneid: "fr"
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										siteid: "immoweb.be/nl",
										zoneid: "nl"
									}
								}
							}], // proxistore
							/*smilewanted: [{
								placements: {
									"immoweb_fr-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed",
										bidfloor: 0.75
									},
									"immoweb_fr-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed-2",
										bidfloor: 0.75
									},
									"immoweb_nl-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed",
										bidfloor: 0.75
									},
									"immoweb_en-default-horizontal_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed",
										bidfloor: 0.75
									},
									"immoweb_nl-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed-2",
										bidfloor: 0.75
									},
									"immoweb_en-default-horizontal_middle2": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										positiontype: "infeed-2",
										bidfloor: 0.75
									},
									"immoweb_fr-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										bidfloor: 0.75
									},
									"immoweb_nl-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										bidfloor: 0.75
									},
									"immoweb_en-default-rectangle_middle": {
										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: "immoweb.be_header_bidding_display_display_pave_side_1_btf",
										bidfloor: 0.75
									}
								}
							}], smilewanted */
							/*improvedigital: [{

								placements: {

									"immoweb_fr-default-horizontal_middle": {

										labelany: ["smartphone"],
										zoneid: 22273000
									},

									"immoweb_nl-default-horizontal_middle": {

										labelany: ["smartphone"],
										zoneid: 22273001
									},

									"immoweb_fr-default-horizontal_middle2": {

										labelany: ["smartphone"],
										zoneid: 22273000
									},

									"immoweb_nl-default-horizontal_middle2": {

										labelany: ["smartphone"],
										zoneid: 22273001
									}

								}

							}],*///improvedigital
							/*appnexus: [{

								placements: {

									"immoweb_fr-default-horizontal_middle": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 19111256
									},

									"immoweb_nl-default-horizontal_middle": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 19111269
									},

									"immoweb_fr-default-horizontal_middle2": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 19111256
									},

									"immoweb_nl-default-horizontal_middle2": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 19111269
									},

									"immoweb_fr-default-rectangle_middle": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 21242832
									},

									"immoweb_nl-default-rectangle_middle": {

										labelany: ["desktop", "tablet", "smartphone"],
										zoneid: 21242824
									},

								}

							}]*/ //appnexus							
						} //config
					}
				},
				callbacks: {
					slotsRegistered: function (resp) {

					},
					finish: function (resp, slotpath, type) {

						if (type === "slotRenderEnded" && /\/rectangle_middle$/i.test(slotpath)) {
							addSticky.defineSize(resp);
						}
					}
				}
			};
			if (window.Promise) {
				getKvsSource = new Promise(function (resolve, reject) {
					if (kvsObj) {
						return resolve({
							kvsObj: kvsObj,
							cached: true
						});
					}
					try {
						ProduPressAds.corsRequest('https://delivery.produpress.be/assets/js/immoweb/kvs.min.json', function (response) {
							return resolve({
								kvsObj: response,
								cached: false
							});
						});
					} catch (ex) {
						return reject(undefined);
					}
				});
				getKvsSource.then(function (res) {
					if (res.cached === false) {
						sess_storage.put('pdp_kvs_source', res.kvsObj);
					}
					kvs.update();
					adsConfig.keyvalues += kvs.genKvs();
					return res;
				}).then(function (res) {
					pdpAds = pdpAds || new ProduPressAds(adsConfig);
					__PDPADS = pdpAds;
					pdpAds.init();
				}).catch(function (err) {
					pdpAds = pdpAds || new ProduPressAds(adsConfig);
					__PDPADS = pdpAds;
					pdpAds.init();
				});
			} else {
				pdpAds = pdpAds || new ProduPressAds(adsConfig);
				__PDPADS = pdpAds;
				pdpAds.init();
			}
			var fireOnce = ProduPressAds.once(function a() {
				if (loc_storage.get('gtm.storage.produpress') === true || self.config.page_config.consentData.getStatus('pdp')) {
					pixels.mortgage();
				}
				var o = new self.observe();
				o.init();

				var cssIW = ProduPressAds.setCss('.pdpads[data-alias$="-propertybuy-horizontal_middle"],.pdpads[data-alias$="-propertyrent-horizontal_middle"] { margin-top: 20px; }');
				document.head.appendChild(cssIW);
			});
			fireOnce();
			// CALLABLE FUNCTIONS 
		}; // END MANAGE
		this.gdpr = function gdpr() {

			var allConsents;
			var pdp = self.config.page_config.data['userCentrics.produpress'] === "true" ? Boolean(self.config.page_config.data['userCentrics.produpress']) : false;
			var pdpio = self.config.page_config.data['produpress.io'] === "true" ? Boolean(self.config.page_config.data['produpress.io']) : false;
			var rtb = self.config.page_config.data['produpress.rtb'] === "true" ? Boolean(self.config.page_config.data['produpress.rtb']) : false;
			var gam = self.config.page_config.consentData.getStatus('gam');

			allConsents = !pdp;

			return allConsents;

		}; // END GDPR
		this.kvs = (function kvs() {
			var uid = function () {
				return Date.now().toString(36) + Math.random().toString(36).substr(2);
			};
			var truncate = function (n, useWordBoundary) {
				if (this.length <= n) {
					return this;
				}
				var subString = this.substr(0, n - 1);
				return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) + "";
			};
			var dedupe = function (v, i, a) {
				var chunk = a.slice(i + 1);
				var duplicate = chunk.includes(v);
				return duplicate ? v : null;
			};
			var cache = new Map();
			PAGE_INFO = cache;

			var als = {
				buy: "FOR_SALE",
				rent: "FOR_RENT"
			};
			var cvs = {
				type: {
					key: "tb_imb",
					utils: "exGeneric",
					newKey: "classified_type",
					useTg: true
				},
				subtype: {
					key: "tsb_imb",
					utils: "exGeneric",
					newKey: "classified_subtype",
					useTg: true
				},
				kitchen: {
					key: "acu_imb",
					subkey: "type",
					utils: "exGeneric",
					newKey: "kitchen_type",
					useTg: true
				},
				energy: {
					key: "cf_imb",
					subkey: "heatingType",
					utils: "exGeneric",
					newKey: "energy_heatingtype",
					useTg: true
				},
				building: {
					key: "eb_imb",
					key2: "aco_imb",
					subkey: "condition",
					utils: "exGeneric",
					newKey: "building_condition",
					useTg: true
				},
				zip: {
					key: "zon_imb",
					linked_key: "zip_imb",
					utils: "exKeyword",
					newKey: "classified_zip",
					useTg: true
				},
				keyword: {
					key: "zon_imb",
					linked_key: "zip_imb",
					utils: "exKeyword",
					newKey: "classified_zip",
					useTg: true
				},
				transactiontype: {
					key: "section_imb",
					utils: "exGeneric",
					newKey: "transactiontype",
					useTg: true
				},
				priceRange: {
					key: "bpa_imb",
					key2: "bpl_imb",
					utils: "exPriceRange",
					newKey: "classified_price",
					dc: function (s) {
						if (s === "buy") {
							return this.priceRange.key;
						}
						if (s === "rent") {
							return this.priceRange.key2;
						}
						return this.priceRange.key;
					}
				},
				price: {
					key: "bpa_imb",
					key2: "bpl_imb",
					utils: "exPriceRange",
					newKey: "classified_price",
					dc: function (s) {
						if (s === "buy") {
							return this.price.key;
						}
						if (s === "rent") {
							return this.price.key2;
						}
						return this.price.key;
					}
				},
				bedroomCountRange: {
					key: "nc_imb",
					utils: "exBedroomRange",
					newKey: "bedroom_count"
				},
				bedroom: {
					key: "nc_imb",
					utils: "exBedroomRange",
					newKey: "bedroom_count"
				}
			};
			var infoObj = {
				count: 0,
				kv_source: "",
				pageId: "",
				pageId2: uid(),
				dataLayer: undefined,
				section: undefined,
				autoGenKvs: [],
				collection: {},
				fullstring: ""
			};
			var stock = {
				id: "",
				data: [{
					pairs: {},
					fullString: ""
				}]
			};
			var utils = {
				replacer: function (s) {
					if (typeof (s) === "string") {
						return s.replace(/\s+/ig, '_');
					}

					if (typeof (s) === "object" && s instanceof Array) {
						return s.map(function (v) {
							return v.replace(/\s+/ig, '_');
						})
					}

					return s;
				},
				findByProp: function findByProp(o, prop, val, retprop) {
					if (o == null) return false;
					if (o[prop] === val) {
						return (retprop) ? o[retprop] : o;
					}
					var result, p;
					for (p in o) {
						if (o.hasOwnProperty(p) && typeof o[p] === 'object') {
							result = findByProp(o[p], prop, val);
							if (result) {
								return (retprop) ? result[retprop] : result;
							}
						}
					}
					return (retprop) ? result[retprop] : result;
				},
				exKeyword: function (value) {
					var v, rs, value;
					value = value instanceof Array ? value : [value];
					v = value.map(function (v) {
						var splt = v.split(/-/i);
						return splt && splt.length === 1 ? splt[0] : splt.length === 2 ? splt[1] : '';
					});
					rs = {
						value: v
					};
					return [rs];
				},
				exGeneric: function (value) {
					var rs, v = value instanceof Array ? value : value.split(',');
					rs = {
						value: v
					};
					return [rs];
				},
				exPriceRange: function (value) {
					var rs, kv, lt = infoObj.dataLayer.locationType,
						ltk = {
							buy: 'bpa_imb',
							rent: 'bpl_imb'
						},
						p, p1, p2, min, max,
						v = value instanceof Object ? value : {
							price: value
						},
						mustDedupe = 0,
						r = [];
					kv = infoObj.kv_source[ltk[lt]];
					if ('min' in v && v.min) {
						min = parseInt(v.min);
						p1 = !isNaN(min) ? kv.map(function (v) {
							return v.tg[0] >= min ? v.value : null;
						}) : 0;
						mustDedupe++;
					}
					if ('max' in v && v.max) {
						max = parseInt(v.max);
						p2 = !isNaN(max) ? kv.map(function (v) {
							return v.tg[0] <= max ? v.value : null;
						}) : 0;
						mustDedupe++;
					}
					if ('price' in v && v.price) {
						p = parseInt(v.price);
						p = !isNaN(p) ? kv.map(function (v) {
							return v.tg[0] <= p && +v.tg[1] >= p ? v.value : null;
						}) : 0;
					}
					r = r.concat(p1, p2, p).filter(function (v) {
						return v;
					});
					if (mustDedupe === 2) {
						r = r.map(dedupe);
					}
					rs = {
						hasDirectValue: true,
						value: r
					};
					return [rs];
				},
				exBedroomRange: function (value) {
					var rs, kv, lt = infoObj.dataLayer.locationType,
						ltk = "nc_imb",
						p, p1, p2, min, max, v = value instanceof Object ? value : {
							count: value
						},
						mustDedupe = 0,
						r = [];
					kv = infoObj.kv_source[ltk];
					if ('min' in v && v.min) {
						min = parseInt(v.min);
						p1 = !isNaN(min) ? kv.map(function (v) {
							return v.tg[0] >= min ? v.value : null;
						}) : 0;
						mustDedupe++;
					}
					if ('max' in v && v.max) {
						max = parseInt(v.max);
						p2 = !isNaN(max) ? kv.map(function (v) {
							return v.tg[0] <= max ? v.value : null;
						}) : 0;
						mustDedupe++;
					}
					if ('count' in v && v.count) {
						p = parseInt(v.count);
						p = !isNaN(p) ? kv.map(function (v) {
							return v.tg[0] <= p && +v.tg[1] >= p ? v.value : null;
						}) : 0;
					}
					r = r.concat(p1, p2, p).filter(function (v) {
						return v;
					});
					if (mustDedupe === 2) {
						r = r.map(dedupe);
					}
					rs = {
						hasDirectValue: true,
						value: r
					};
					return [rs];
				},
				genKeyvalues: function (f) {
					var key = f.key;
					var value = f.value;

					for (var i = 0; i < value.length; i++) {
						var v = value[i];
						var s = i === 0 ? key + "=" + v.value : ',' + v.value;
						var e = i + 1 === value.length ? ";" : "";
						this.string += s + e;
						if (!this.pairs[key]) {
							this.pairs[key] = [];
						}
						if (!this.pairs[key].includes(v.value)) {
							this.pairs[key].push(v.value);
						}
					}
				},
				exConstRang: function (nb) {

					var range = [{ price: [-Infinity, 1930], tg: 1 }, { price: [1931, 1959], tg: 2 }, { price: [1960, 1979], tg: 3 }, { price: [1980, 1990], tg: 4 }, { price: [1991, 2000], tg: 5 }, { price: [2001, Infinity], tg: 6 }];

					var nbb = parseInt(nb);

					if (isNaN(nbb)) { return 0; }

					var found = range.find(function (v) {

						var min = v.price[0];
						var max = v.price[1];

						if (nbb >= min && nbb <= max) { return v; }


					});

					return found ? found.tg : 0;

				},
				exEnergyRang: function (nb) {

					var range = [{ price: [-Infinity, 45], tg: "a" }, { price: [46, 95], tg: "b" }, { price: [96, 150], tg: "c" }, { price: [151, 210], tg: "d" }, { price: [211, 275], tg: "e" }, { price: [276, 345], tg: "f" }, { price: [345, Infinity], tg: "g" }];

					var nbb = parseInt(nb);

					if (isNaN(nbb)) { return 0; }

					var found = range.find(function (v) {

						var min = v.price[0];
						var max = v.price[1];

						if (nbb >= min && nbb <= max) { return v; }


					});

					return found ? found.tg : 0;

				},
				exLandRang: function (nb) {

					var range = [
						{ price: [-Infinity, 250], tg: "1" },
						{ price: [251, 500], tg: "2" },
						{ price: [501, 750], tg: "3" },
						{ price: [751, 1000], tg: "4" }, 
						{ price: [1001, 1250], tg: "5" }, 
						{ price: [1251, 1500], tg: "6" }, 
						{ price: [1501, 1750], tg: "7" }, 
						{ price: [1751, 2000], tg: "8" },
						{ price: [2001, 2250], tg: "9" },
						{ price: [2251, Infinity], tg: "10" }];

					var nbb = parseInt(nb);

					if (isNaN(nbb)) { return 0; }

					var found = range.find(function (v) {

						var min = v.price[0];
						var max = v.price[1];

						if (nbb >= min && nbb <= max) { return v; }


					});

					return found ? found.tg : 0;

				}

			};
			return function () {
				this.init = function (opts) {
					if (!cache.has('pageInfo')) {
						cache.set('pageInfo', infoObj);
					}
					if (!cache.has('stock')) {
						cache.set('stock', stock);
					}
					var kv_source = kvsObj || sess_storage.get('pdp_kvs_source');
					var dataLayer = this.getDataLayer();
					var encoded = dataLayer.encoded;
					var section = dataLayer.section;
					var locationType = dataLayer.locationType;
					section = section && section === "classified" ? "detail" : section === "searchInfo" ? "list" : "";
					infoObj.kv_source = kv_source;
					infoObj.dataLayer = dataLayer;
					infoObj.section = section;
					infoObj.locationType = locationType;
					infoObj.pageId = encoded;
				}; // INIT
				this.update = function () {
					infoObj.count++;
					return this.init({
						requestUpdate: true
					})
				}
				this.getDataLayer = function (prop) {
					var pageInfo = cache.get('pageInfo');
					var url = document.location.href;
					var encoded = btoa(encodeURIComponent(url));
					var dObj = {},
						dLayer, locationType;
					var dt = {
						buy: ['for-sale', 'a-vendre', 'te-koop'],
						rent: ['te-huur', 'for-rent', 'a-louer']
					};
					dLayer = window.dataLayer.filter(function (v, i, r) {
						if (prop) {
							return v[prop];
						} else {
							return v.classified || v.event === "search_results_view";
						}
					});
					locationType = url.match(/(a-vendre|a-louer|te-huur|te-koop|for-rent|for-sale)/i);
					locationType = locationType && locationType.length > 0 ? locationType[1] : "";
					locationType = locationType ? Object.keys(dt).filter(function (v) {
						return dt[v].includes(locationType)
					}) : "";
					dObj.full = dLayer;
					dObj.last = dLayer && dLayer.length > 0 ? dLayer[dLayer.length - 1] : null;
					dObj.encoded = encoded;
					dObj.section = dObj.last ? ["classified", "searchInfo"].find(function (v) {
						return Object.keys(dObj.last).includes(v);
					}) : "";
					dObj.locationType = locationType.toString();
					return dObj;
				};
				this.queryKvGroup = function (prop, value) {
					var allowed_keys = Object.keys(cvs),
						subkey, c, u, l, cc, result, chunk, obj, v, kvs = infoObj.kv_source;
					if (!value || allowed_keys.indexOf(prop) === -1) {
						return ""
					}
					if (cvs[prop].subkey) {
						value = value[cvs[prop].subkey];
					}
					c = cvs[prop].dc ? cvs[prop].dc.call(cvs, infoObj.locationType) : cvs[prop].key;
					l = cvs[prop].linked_key;
					u = cvs[prop].utils;
					if (c in kvs) {
						obj = kvs[c];
						v = utils[u](value);
						result = Object.keys(obj).map(function (vv, ii, rr) {
							var targeting = obj[vv].tg ? String(obj[vv].tg).toLowerCase() : "";
							var value = obj[vv].value;
							var label = obj[vv].label;
							var found = v.find(function (f) {
								if (f.hasDirectValue === undefined) {
									if (f.value.includes(targeting)) {
										return f.value.includes(targeting);
									} else {
										targeting = targeting.replace(/\s+/g, '_');
										return f.value.includes(targeting);
									}

								} else if (f.hasDirectValue) {
									return f.value.includes(value);
								}
							});
							if (found && l) {
								infoObj.autoGenKvs.push({
									key: l,
									value: [{
										value: targeting
									}]
								});
							}
							return found ? obj[vv] : null;
						}).filter(function (v) {
							return v;
						});
						return {
							key: c,
							value: result
						};
					}
					return '';
				};
				this.queryNewKvGroup = function (data) {
					var nKey;
					var nD = JSON.parse(JSON.stringify(data));
					var key = nD.key;
					var value = nD.value;
					var newKey = Object.values(cvs).find(function (v) { return v.key === key; });

					if (!newKey) {
						newKey = Object.values(cvs).find(function (v) { return v.key2 === key; });
					}

					if (!newKey) { return undefined; } else {

						nKey = newKey.newKey;

						if (newKey.useTg) {
							value = value.map(function (v) {
								v.value = v.tg instanceof Array ? utils.replacer(v.tg) : [utils.replacer(v.tg)];
								return v;
							})
						}

					}

					return {
						key: nKey,
						value: value
					};


				};
				this.genKvs = function () {
					var kvStr = "",
						pageId, section, last, locationType = infoObj.locationType,
						objCollection = {
							pairs: {},
							string: ''
						},
						dLayer = infoObj.dataLayer;
					var kvFunc = utils.genKeyvalues.bind(objCollection);
					if (dLayer && dLayer.last) {
						last = dLayer.last;
						section = dLayer.section;
						if (section) {
							infoObj.autoGenKvs.push({
								key: 'section_imb',
								value: [{
									value: locationType
								}]
							}, {
								key: 'transactiontype',
								value: [{
									value: als[locationType]
								}]
							}, {
								key: 'building_constryear',
								value: [{
									value: last[section] && last[section].building && last[section].building.constructionYear ? utils.exConstRang(last[section].building.constructionYear) : ""
								}]
							}, {
								key: 'cert_energycons',
								value: [{
									value: last[section] && last[section].certificates && last[section].certificates.primaryEnergyConsumptionLevel ? utils.exEnergyRang(last[section].certificates.primaryEnergyConsumptionLevel) : ""
								}]
							}, {
								key: 'screensize_class',
								value: [{
									value: sizes.type || ""
								}]
							}, {
								key: 'refreshad_count',
								value: [{
									value: infoObj.count || 1
								}]
							}, {
								key: 'condition_newlybuilt',
								value: [{
									value: last[section] && last[section].condition && last[section].condition.isNewlyBuilt ? last[section].condition.isNewlyBuilt : ""
								}]
							}, {
								key: 'outdoor_garden',
								value: [{
									value: last[section] && last[section].outdoor && last[section].outdoor.garden && last[section].outdoor.garden.surface ? utils.exLandRang(last[section].outdoor.garden.surface) : ""
								}]
							}, {
								key: 'outdoor_terrace',
								value: [{
									value: last[section] && last[section].outdoor && last[section].outdoor.terrace && last[section].outdoor.terrace.exists ? last[section].outdoor.terrace.exists : ""
								}]
							});
							for (var p in last[section]) {
								if (Object.prototype.hasOwnProperty.call(last[section], p)) {
									var f = this.queryKvGroup(p, last[section][p]);
									if (f) {
										kvFunc(f);

										var nK = this.queryNewKvGroup(f);

										if (nK) {
											kvFunc(nK);
										}
									}
								}
							}
							if (infoObj.autoGenKvs && infoObj.autoGenKvs.length > 0) {
								infoObj.autoGenKvs.forEach(function (f) {
									kvFunc(f);
								});
							}
						}
					}
					infoObj.collection = objCollection;
					infoObj.fullstring = objCollection.string;
					return objCollection.string;
				};
				this.getCache = function () {
					return cache;
				}
			}
		})(); // END KVS
		this.observe = (function observe() {
			return function () {
				var utils = {
					updatePlacement: function () {
						var ck = window.PDP_GLOBAL && window.PDP_GLOBAL.placements instanceof Array ? PDP_GLOBAL.placements.reduce(function (i, m, z, o) {
							var key = Object.keys(m);
							if (!i[key]) {
								i[key] = {
									loaded: m[key].status.loaded,
									inIsEmpty: !!m[key].ad.innerHTML
								};
							}
							return i;
						}, {}) : undefined;
						return ck;
					}
				};
				this.config = {
					timeoutId: undefined,
					timeoutId2: undefined,
					sentRequest: false,
					execCount: 1,
					targetNode: undefined,
					placements: {
						slots: []
					},
					ads: undefined,
					refreshes: 0
				};
				this.init = function () {
					var self = this;
					var config = {
						attributes: true,
						childList: true,
						subtree: true,
						characterData: false
					};
					var targetNode = document.querySelector('#main-content.search-results__list');
					var cache = PAGE_INFO;
					var section = cache.get('pageInfo').section;
					if (section !== "list") {
						return false;
					}
					if (targetNode === null) {
						return false;
					}
					this.config.ads = utils.updatePlacement();
					this.config.targetNode = targetNode;
					var callback = function (mutationList) {
						return self.exec(mutationList);
					};
					var observer = new MutationObserver(callback);
					observer.observe(targetNode, config);
				};
				this.exec = function exec(mutationsList) {
					var self = this,
						refresh, targetNode = this.config.targetNode;
					refresh = ProduPressAds.debounce(function () {
						self.refresh();
					}, 250);
					for (var mut in mutationsList) {
						var mutation = mutationsList[mut];
						if (mutation.type === "attributes") {
							if (mutation.target.className === targetNode.className && mutation.target.id === targetNode.id) {
								if (this.config.timeoutId2) {
									clearTimeout(this.config.timeoutId2);
								}
								this.config.timeoutId2 = setTimeout(function () {
									if (!this.config.sentRequest) {
										refresh();
									}
								}.bind(this), 1000);
							}
						}
					}
				};
				this.refresh = function () {
					var self = this,
						slots = [],
						codes = [],
						cache, kvs_map, kvs_map2, plcs, placements;
					this.config.sentRequest = true;
					kvs.update();
					kvs.genKvs();
					cache = PAGE_INFO;
					kvs_map = cache.get('pageInfo').collection;
					kvs_map2 = kvs_map.pairs;
					plcs = this.config.placements;
					placements = PDP_GLOBAL.placements;
					for (var p in placements) {
						var z = placements[p];
						var key = Object.keys(z);
						var prop = z[key];
						codes.push(prop.code);
						slots.push(prop.slot);
					}
					var showAd = ProduPressAds.debounce(function rfs(e) {
						if (!rfs.ads) {
							rfs.ads = {};
						}
						slots.forEach(function (el) {
							var slot = el;
							var id = slot.getSlotElementId();
							var dmEl = document.querySelector('#' + id);
							if (dmEl && !rfs.ads[id]) {

								if (/-rectangle_middle$/i.test(id)) {

									if (ProduPressAds.isViewable(dmEl, 50).view) {
										rfs.ads[id] = true;
										refreshAd(slot);
									}

								} else {
									rfs.ads[id] = true;
									refreshAd(slot);
								}

							}
						});
					}, 250);
					showAd();
					window.addEventListener('scroll', showAd);
					window.addEventListener('resize', showAd);

					function refreshAd(slot) {

						googletag.cmd.push(function () {
							slot.clearTargeting();
							slot.setCollapseEmptyDiv(false);
							slot.updateTargetingFromMap(kvs_map2);
							googletag.pubads().refresh([slot], {
								changeCorrelator: false
							});

						});

						timeoutId = setTimeout(function () {
							window.removeEventListener('scroll', showAd);
							window.removeEventListener('resize', showAd);
							self.config.ads = utils.updatePlacement();
							self.config.sentRequest = false;
						}, 10000);
					}
				};
			}
		})(); // END OBSERVE
		this.pixels = (function pixels() {

			function firePixel(url) {
				var img = new Image();
				img.src = url;
			}

			return function () {
				this.mortgage = function () {
					var pages = ["/fr/demande-de-credit/propriete", "/nl/kredietaanvraag/pand", "/en/credit-application/property", "/en/credit-application/basics", "/fr/demande-de-credit/info-basique", "/nl/kredietaanvraag/info-baasique"];

					pages.forEach(function (v) {
						if (v === document.location.pathname) {
							firePixel('https://pubads.g.doubleclick.net/activity;dc_iu=/19024548/DFPAudiencePixel;ord=' + new Date().getTime() + ';dc_seg=6610290622?')
						}
					});
				}
			}

		})(); // END PIXELS
		this.addSticky = function addSticky() {

			var hassticky = false;
			var element = document.querySelector('div.pdpads[data-alias*="-rectangle_middle"][data-device="desktop tablet"]');

			if (!element) { return; }

			var parent_element = element.parentNode;
			var topNav = document.querySelector('#top-navigation');
			var header = document.querySelector('#classified-header');
			var customerCard = document.querySelector('.customer-card--minimal--header');
			var searchMobile = document.querySelector('#search-results-menu-mobile');
			var extrasearchMobile = document.getElementsByClassName('search-results__nav');
			var bigHeader_height = calcHeight();

			var table = {
				"resultgallerybuy": {
					sizes: [[300, 600], [120, 600], [160, 600]],
					mediaMatch: '(min-width: 768px) and (min-height: 700px)',
					stickyTop: bigHeader_height,
					padding: "8px 0 0 0",
					ad_maxHeight: addSticky.ad_maxHeight || 600
				},
				"resultgalleryrent": {
					sizes: [[300, 600], [120, 600], [160, 600]],
					mediaMatch: '(min-width: 768px) and (min-height: 700px)',
					stickyTop: bigHeader_height,
					padding: "8px 0 0 0",
					ad_maxHeight: addSticky.ad_maxHeight || 600
				},
				"extendedsearch": {
					sizes: [[300, 600], [120, 600], [160, 600]],
					mediaMatch: '(min-width: 768px) and (min-height: 700px)',
					stickyTop: bigHeader_height,
					padding: "8px 0 0 0",
					ad_maxHeight: addSticky.ad_maxHeight || 600
				},
				"propertybuy": {
					sizes: [[300, 600], [120, 600], [160, 600]],
					mediaMatch: '(min-width: 992px) and (min-height: 910px)',
					stickyTop: bigHeader_height + 16,
					padding: "3px 0 0 0",
					ad_maxHeight: addSticky.ad_maxHeight || 600
				},
				"propertyrent": {
					sizes: [[300, 600], [120, 600], [160, 600]],
					mediaMatch: '(min-width: 992px) and (min-height: 910px)',
					stickyTop: bigHeader_height + 16,
					padding: "3px 0 0 0",
					ad_maxHeight: addSticky.ad_maxHeight || 600
				}
			};

			var fullName;
			var alias = element.getAttribute('data-alias');
			fullName = alias;
			alias = alias.split('-');
			var [site, section, placement] = alias;

			var mm = mMatch();
			change(mm);

			if (mm.addEventListener) {
				mm.addEventListener('change', change);
			} else {
				mm.addListener(change);
			}


			function calcHeight() {

				var topNav_height = topNav ? topNav.offsetHeight : 0;
				var header_height = header ? header.offsetHeight : 0;
				var customerCard_height = customerCard ? customerCard.offsetHeight : 0;
				var searchMobile_height = searchMobile ? searchMobile.offsetHeight : 0;
				var extrasearchMobile_height = extrasearchMobile && extrasearchMobile.length > 0 ? extrasearchMobile[0].offsetHeight : 0;
				var bigHeader_height = topNav_height + header_height + customerCard_height + searchMobile_height + extrasearchMobile_height;

				return bigHeader_height;

			}

			function change(e) {

				bigHeader_height = calcHeight();

				var limit = (window.innerHeight || document.documentElement.clientHeight) - bigHeader_height;

				if (e.matches) {
					parent_element.style.height = "100%";
					element.style.position = "sticky";
					element.style.position = "-webkit-sticky";
					element.style.position = "-moz-sticky";
					element.style.position = "-ms-sticky";
					element.style.position = "-o-sticky";
					element.style.top = table[section].stickyTop + "px";
					element.style.padding = table[section].padding;
					hassticky = true;

				} else if (e.matches === false && limit >= table[section].ad_maxHeight) {
					parent_element.style.height = "100%";
					element.style.position = "sticky";
					element.style.position = "-webkit-sticky";
					element.style.position = "-moz-sticky";
					element.style.position = "-ms-sticky";
					element.style.position = "-o-sticky";
					element.style.top = table[section].stickyTop + "px";
					element.style.padding = table[section].padding;
					hassticky = true;

				} else {
					element.removeAttribute('style');
				}
			}

			function mMatch(e) {

				var mm = window.matchMedia(table[section].mediaMatch);

				return mm;

			}

			return {
				defineSize: function defineSize(resp) {

					if (!resp) { return; }

					var size = resp.size || [];

					var [width = 1, height = 1] = size;

					if (width !== 1 && height !== 1) {
						table[section].ad_maxHeight = height;

						change(mm);

						return;

					} else {

						var element_height = element.offsetHeight;

						table[section].ad_maxHeight = element_height;

						change(mm);

					}

				},
				setKeyvalues: function setKeyvalues(resp) {

					if (!resp) { return; }

					var slots = resp.getSlots();

					for (var p of slots) {
						var slot = p;
						if (slot.getSlotElementId() === fullName) {
							slot.updateTargetingFromMap({
								'hassticky': typeof (hassticky) !== 'undefined' ? hassticky : false
							})
						}
					}

				}
			};

		}; // END ADDSTICKY
	}; // END return
})(); // END PRODUPRESSADSMANAGER
ProduPressAdsManager.getConsent = function (consentType) {
	var ct = {
		pdp: [(window.usercentricsConsent && window.usercentricsConsent["userCentrics.produpress"] === "true" ? true : false)],
		io: [(window.usercentricsConsent && window.usercentricsConsent["produpress.io"] === "true" ? true : false)],
		gam: [(window.usercentricsConsent && window.usercentricsConsent['userCentrics.google_ad_manager'] === "true" ? true : false)],
		rtb: [(window.usercentricsConsent && window.usercentricsConsent["produpress.rtb"] === "true" ? true : false)],
		rtbVendors: [
			(window.usercentricsConsent ? !!window.usercentricsConsent['userCentrics.adhese'] : false), (window.usercentricsConsent ? !!window.usercentricsConsent['userCentrics.the_rubicon_project'] : false), (window.usercentricsConsent ? !!window.usercentricsConsent['userCentrics.teads'] : false), (window.usercentricsConsent ? !!window.usercentricsConsent['userCentrics.proxistore'] : false), (window.usercentricsConsent ? !!window.usercentricsConsent['userCentrics.pubmatic'] : false)
		],
		consentString: {
			fr: "CPEr1UvPEr1UvAHABBENBVCsAP_AAH_AAAAAHsNf_X__b3_j-_59__t0eY1f9_7_v-0zjhfdt-8N2f_X_L8X42M7vF36pq4KuR4Eu3LBIQdlHOHcTUmw6okVrTPsbk2Mr7NKJ7PEinMbe2dYGH9_n93TuZKY7__8___z__-__v____f_r-3_3__p9X---_e_V399xLv9__wPVAJMNS-ACzEscGSaNKoUQIQrCQ6AUAFFCMLRNYQMrgp2VwEeoIGACE1ARgRAgxBRiwCAAQCAJCIgJADwQCIAiAQAAgBUgIQAEbAILACwMAgAFANCxAigCECQgyOCo5TAgIkWignsrAEou9jTCEMosAKBR_RUYCJUggWBkAAA.f_gAD_gAAAAA",
			nl: "CPEr1UvPEr1UvAHABBENBVCsAP_AAH_AAAAAHsNf_X__b3_j-_59__t0eY1f9_7_v-0zjhfdt-8N2f_X_L8X42M7vF36pq4KuR4Eu3LBIQdlHOHcTUmw6okVrTPsbk2Mr7NKJ7PEinMbe2dYGH9_n93TuZKY7__8___z__-__v____f_r-3_3__p9X---_e_V399xLv9__wPVAJMNS-ACzEscGSaNKoUQIQrCQ6AUAFFCMLRNYQMrgp2VwEeoIGACE1ARgRAgxBRiwCAAQCAJCIgJADwQCIAiAQAAgBUgIQAEbAILACwMAgAFANCxAigCECQgyOCo5TAgIkWignsrAEou9jTCEMosAKBR_RUYCJUggWBkAAA.f_gAD_gAAAAA",
			en: "CPEr1UvPEr1UvAHABBENBVCsAP_AAH_AAAAAHsNf_X__b3_j-_59__t0eY1f9_7_v-0zjhfdt-8N2f_X_L8X42M7vF36pq4KuR4Eu3LBIQdlHOHcTUmw6okVrTPsbk2Mr7NKJ7PEinMbe2dYGH9_n93TuZKY7__8___z__-__v____f_r-3_3__p9X---_e_V399xLv9__wPVAJMNS-ACzEscGSaNKoUQIQrCQ6AUAFFCMLRNYQMrgp2VwEeoIGACE1ARgRAgxBRiwCAAQCAJCIgJADwQCIAiAQAAgBUgIQAEbAILACwMAgAFANCxAigCECQgyOCo5TAgIkWignsrAEou9jTCEMosAKBR_RUYCJUggWBkAAA.f_gAD_gAAAAA"
		},
		getStatus: function (a) {
			return a && this[a] instanceof Array ? this[a].every(function (v) {
				return v;
			}) : false;
		},

	};
	return ct;
};
ProduPressAdsManager.getLanguage = function () {
	var path = document.location.pathname;
	var lang = path.match(/\/(fr|nl|en)\//i);

	return lang && lang.length > 0 ? lang[1] : "";
};
ProduPressAdsManager.defineSizes = function () {
	var sizes = [{

		mm: "(min-width: 0px) and (max-width: 320px)",
		type: "xs"
	}, {

		mm: "(min-width: 321px) and (max-width: 479px)",
		type: "s"
	}, {

		mm: "(min-width: 480px) and (max-width: 767px)",
		type: "s-m"
	}, {

		mm: "(min-width: 768px) and (max-width: 991px)",
		type: "m",
		subsize: [{
			mm: "(min-height: 700px)",
			type: "m-s"
		}]

	}, {

		mm: "(min-width: 992px) and (max-width: 1023px)",
		type: "m",
		subsize: [{
			mm: "(min-height: 700px) and (max-height: 899px)",
			type: "m-s"
		}, {
			mm: "(min-height: 900px)",
			type: "m-m"
		}]

	}, {

		mm: "(min-width: 1024px) and (max-width: 1365px)",
		type: "m",
		subsize: [{
			mm: "(min-height: 700px) and (max-height: 899px)",
			type: "m-s"
		}, {
			mm: "(min-height: 900px)",
			type: "m-m"
		}]

	}, {

		mm: "(min-width: 1366px)",
		type: "l"

	}];

	function findSize(r) {

		function iter(a) {

			var mmedia = a.mm;
			if (window.matchMedia(mmedia).matches) {

				hasSubsize = Array.isArray(a.subsize);
				if (hasSubsize) {
					lastMatch = a;
					return a.subsize.some(iter);
				}
				result = a;
				return true;
			}

		}

		var lastMatch, hasSubsize, result;
		sizes.some(iter);
		return result || lastMatch;
	}

	return findSize(sizes);

};