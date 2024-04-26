var APP_DATA = {
  "scenes": [
    {
      "id": "0-dolci",
      "name": "DOLCI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9481879987637036,
          "pitch": -0.04121295535845171,
          "rotation": 0,
          "target": "1-show-cooking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03604135738907388,
          "pitch": 0.2584680605184282,
          "title": "DOLCE",
          "text": "Una sana colazione&nbsp;"
        },
        {
          "yaw": 1.3673942322011623,
          "pitch": -0.01361273159207066,
          "title": "AFFETTATI",
          "text": "FRISCHE SALAMI UND KÄSE&nbsp;<div>FRESH SALAMI AND CHEESE</div>"
        },
        {
          "yaw": 1.9854400314180571,
          "pitch": 0.41666322874117867,
          "title": "YOGURT",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-show-cooking",
      "name": "SHOW COOKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5200636926313145,
        "pitch": 0.3467587440214821,
        "fov": 1.4300641596566168
      },
      "linkHotspots": [
        {
          "yaw": -2.5862606515129585,
          "pitch": -0.06388979201199696,
          "rotation": 0,
          "target": "0-dolci"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.452825400068525,
          "pitch": 0.2918324432149433,
          "title": "CREPES-WAFFEL-OMELETTE",
          "text": "Ready made"
        }
      ]
    },
    {
      "id": "2-and-much-more",
      "name": "and much more..",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9020142771352573,
          "pitch": 0.1934375304383611,
          "rotation": 0,
          "target": "1-show-cooking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.019628054956186247,
          "pitch": 0.013659164067018281,
          "title": "Fontane di cioccolato",
          "text": "HOMEMADE CAKES"
        },
        {
          "yaw": 2.825405105120261,
          "pitch": 0.2633867450192966,
          "title": "PROSECCO",
          "text": "Why not?"
        }
      ]
    }
  ],
  "name": "COLAZIONI - FRÜHSTÜCK - BREAKFAST",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
