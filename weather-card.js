const LitElement = customElements.get("hui-masonry-view") ? Object.getPrototypeOf(customElements.get("hui-masonry-view")) : Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

const locale = {
  da: {
    temp: "Temperatur",
    tempHi: "Temperatur maks",
    tempLo: "Temperatur nat",
    precip: "Nedbør",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NØ', 'NØ', 'Ø-NØ', 'Ø', 'Ø-SØ', 'SØ', 'S-SØ',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  },
  de: {
    temp: "temperatur",
    tempHi: "Höchsttemperatur",
    tempLo: "Tiefsttemperatur",
    precip: "Niederschlag",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  en: {
    temp: "Temperature",
    tempHi: "Temperature max",
    tempLo: "Temperature min",
    precip: "Precipitations",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SW', 'SW', 'W-SW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  es: {
    temp: "Temperatura",
    tempHi: "Temperatura máxima",
    tempLo: "Temperatura mínima",
    precip: "Precipitations",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  fr: {
    temp: "Température",
    tempHi: "Température max",
    tempLo: "Température min",
    precip: "Précipitations",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NE', 'NE', 'E-NE', 'E', 'E-SE', 'SE', 'S-SE',
      'S', 'S-SO', 'SO', 'O-SO', 'O', 'O-NO', 'NO', 'N-NO', 'N'
    ]
  },
  nl: {
    temp: "temperatuur",
    tempHi: "Maximum temperatuur",
    tempLo: "Minimum temperatuur",
    precip: "Neerslag",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-ZO', 'ZO', 'Z-ZO',
      'Z', 'Z-ZW', 'ZW', 'W-ZW', 'W', 'W-NW', 'NW', 'N-NW', 'N'
    ]
  },
  ru: {
    temp: "Температура",
    tempHi: "Температура макси",
    tempLo: "Температура ночью",
    precip: "Осадки",
    uPress: "гПа",
    uSpeed: "м/с",
    uPrecip: "мм",
    uPrecipProb: "%",
    cardinalDirections: [
      'С', 'С-СВ', 'СВ', 'В-СВ', 'В', 'В-ЮВ', 'ЮВ', 'Ю-ЮВ',
      'Ю', 'Ю-ЮЗ', 'ЮЗ', 'З-ЮЗ', 'З', 'З-СЗ', 'СЗ', 'С-СЗ', 'С'
    ]
  },
  sv: {
    temp: "Temperatur",
    tempHi: "Max temperatur",
    tempLo: "Min temperatur",
    precip: "Nederbörd",
    uPress: "hPa",
    uSpeed: "m/s",
    uPrecip: "mm",
    uPrecipProb: "%",
    cardinalDirections: [
      'N', 'N-NO', 'NO', 'O-NO', 'O', 'O-SO', 'SO', 'S-SO',
      'S', 'S-SV', 'SV', 'V-SV', 'V', 'V-NV', 'NV', 'N-NV', 'N'
    ]
  }
};

const cardinalDirectionsIcon = [
  'mdi:arrow-down', 'mdi:arrow-bottom-left', 'mdi:arrow-left',
  'mdi:arrow-top-left', 'mdi:arrow-up', 'mdi:arrow-top-right',
  'mdi:arrow-right', 'mdi:arrow-bottom-right', 'mdi:arrow-down'
];


const trendIcon = {
  rising: "mdi:trending-up",
  falling: "mdi:trending-down",
  steady: "mdi:trending-neutral"
};

const weatherIconsDay = {
  clear: "clear-day",
  "clear-day": "clear-day",
  "clear-night": "night",
  "mostly-sunny-day": "mostly-sunny-day",
  "mostly-clear-night": "mostly-clear-night",
  "mostlycloudy": "mostly-cloudy-day",
  "mostly-cloudy": "mostly-cloudy-day",
  "mostly-cloudy-day": "mostly-cloudy-day",
  cloudy: "cloudy",
  "cloudy-day": "cloudy",
  fog: "fog",
  hail: "hail",
  sleet: "sleet",
  thunderstorm: "thunderstorm",
  "thunderstorm-day": "thunderstorm-day",
  lightning: "thunderstorm-day",
  "lightning-rainy": "thunderstorm-day",
  "lightning-day": "thunderstorm-day",
  partlycloudy: "partly-cloudy-day",
  "partly-cloudy-day": "partly-cloudy-day",
  pouring: "pouring",
  rainy: "rainy-day",
  rain: "rainy-day",
  "rainy-day": "rainy-day",
  snowy: "snowy",
  "snowy-rainy": "sleet",
  sunny: "clear-day",
  windy: "wind",
  "windy-cloudy": "windy-cloudy",
  "windy-variant": "windy-variant",
  exceptional: "!!"
};

const weatherIconsNight = {
  fog: "fog",
  hail: "hail",
  sleet: "sleet",
  clear: "clear-night",
  "clear-night": "clear-night",
  "mostly-clear-night": "mostly-clear-night",
  sunny: "clear-night",
  partlycloudy: "partly-cloudy-night",
  "partly-cloudy-night": "partly-cloudy-night",
  "windy-variant": "windy-variant",
  "mostly-cloudy-night": "mostly-cloudy-night",
  cloudy: "cloudy-night",
  "cloudy-night": "cloudy-night",
  thunderstorm: "thunderstorm-night",  
  "thunderstorm-night": "thunderstorm-night",
  lightning: "thunderstorm-night",
  "lightning-rainy": "thunderstorm-night",
  "lightning-night": "thunderstorm-night",
  snowy: "snowy-night",
  rain: "rainy-night",
  rainy: "rainy-night",
  "rainy-night": "rainy-night",
  pouring: "pouring",
  windy: "wind",
  "windy-cloudy": "windy-cloudy",
  "windy-variant": "windy-variant",
  exceptional: "!!"
};

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

function hasConfigOrEntityChanged(element, changedProps) {
  if (changedProps.has("_config")) {
    return true;
  }

  const oldHass = changedProps.get("hass");
  if (oldHass) {
    return (
      oldHass.states[element._config.entity] !==
        element.hass.states[element._config.entity] ||
      oldHass.states["sun.sun"] !== element.hass.states["sun.sun"]
    );
  }

  return true;
}

class WeatherCard extends LitElement {
  static get properties() {
    return { _config: {}, hass: {} };
  }

  static async getConfigElement() {
    await import("./weather-card-editor.js");
    return document.createElement("weather-card-editor");
  }

  static getStubConfig() {
    return {};
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Please define a weather entity");
    }
    
    this._config = config;
    if (this._config.forecast_max_Column)
      this._config.forecast_max_Column = parseInt(this._config.forecast_max_Column);

    this.setWeatherObj();
  }

  setWeatherObj() {
    
    if (!this.hass)
      return;
    
    this.weatherObj = this._config.entity in this.hass.states ? this.hass.states[this._config.entity] : null;
    if (!this.weatherObj)
      return;

    if (!this._config.forecast_max_Column
        || this._config.forecast_max_Column < 2)
      this.forecast = this.weatherObj.attributes.forecast.slice(0,24);
    else
      this.forecast = this.weatherObj.attributes.forecast.slice(0,this._config.forecast_max_Column);

    //determine if the weather is hourly or daily
    var diffHours = Math.abs(new Date(this.forecast[0].datetime) - new Date(this.forecast[1].datetime)) / 36e5;
    if (diffHours === 1)
      this.mode = 'hourly';
    else
      this.mode = 'daily';

    this.dewpoint = this._config.dewpoint in this.hass.states ? this.hass.states[this._config.dewpoint].state : null;
    this.ptrend = this._config.ptrend in this.hass.states ? this.hass.states[this._config.ptrend].state.toLowerCase() : null;
    this.currenticon = this._config.currenticon in this.hass.states ? this.hass.states[this._config.currenticon].state : null;
    this.feelslike = this._config.feelslike in this.hass.states ? this.hass.states[this._config.feelslike].state : null;
    this.uvindex = this._config.uvindex in this.hass.states ? this.hass.states[this._config.uvindex].state : null;
    this.lightning_count = this._config.lightning_count in this.hass.states ? this.hass.states[this._config.lightning_count].state : null;
    this.lightning_distance = this._config.lightning_distance in this.hass.states ? this.hass.states[this._config.lightning_distance].state : null;
    this.rain_today = this._config.rain_today in this.hass.states ? this.hass.states[this._config.rain_today].state : null;
  }
  
  shouldUpdate(changedProps) {
    return hasConfigOrEntityChanged(this, changedProps);
  }

  updated(param) {
    this.setWeatherObj();
    var chart = this.shadowRoot.getElementById("Chart");
    if (chart)
      chart.data = this.ChartData;
  }

  render() {
    if (!this._config || !this.hass) {
      return html``;
    }

    this.setWeatherObj();
    this.numberElements = 0;
    this.lang = this.hass.selectedLanguage || this.hass.language;

    if (!this.weatherObj) {
      return html`
        <style>
          .not-found {
            flex: 1;
            background-color: yellow;
            padding: 8px;
          }
        </style>
        <ha-card>
          <div class="not-found">
            Entity not available: ${this._config.entity}
          </div>
        </ha-card>
      `;
    }
    
    return html`
      ${this.renderStyle()}
      <ha-card @click="${this._handleClick}">
        ${this._config.current  !== false ? this.renderCurrent() : ""}
        ${this._config.details  !== false ? this.renderDetails() : ""}
        ${this._config.forecast !== false ? this.renderForecast() : ""}
      </ha-card>
    `;
  }

  renderCurrent() {
    this.numberElements++;

    return html`
      <div class="current ${this.numberElements > 1 ? "spacer" : ""}">
        <span
          class="icon bigger"
          style="background: none, url('${this.getWeatherIcon(
            this.currenticon,
            this.hass.states["sun.sun"].state
          )}') no-repeat; background-size: contain;"
          >${this.weatherObj.state}
        </span>
        ${this._config.name
          ? html`
              <span class="title"> ${this._config.name} </span>
            `
          : ""}
        <span class="temp"
          >${this.getUnit("temperature") == "°F"
            ? Math.round(this.weatherObj.attributes.temperature)
            : this.weatherObj.attributes.temperature}°</span
        >
        <span class="feels"> Feels like ${Math.round(this.feelslike)}°</span>
      </div>
    `;
  }

  renderDetails() {
    const sun = this.hass.states["sun.sun"];
    let next_rising;
    let next_setting;

    if (sun) {
      next_rising = new Date(sun.attributes.next_rising);
      next_setting = new Date(sun.attributes.next_setting);
    }

    this.numberElements++;

    return html`
      <ul class="variations ${this.numberElements > 1 ? "spacer" : ""}">
        <li>
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${this.weatherObj.attributes.humidity}<span class="unit"> % </span>
        </li>
        <li>
          ${this.getWindDir(this.weatherObj.attributes.wind_bearing)}
          <ha-icon style="margin-left: 0;" 
              icon="${this.getWindDirIcon(this.weatherObj.attributes.wind_bearing)}"></ha-icon>
          ${this.weatherObj.attributes.wind_speed}<span class="unit">
            ${this.getUnit("length")}/h
          </span>
          <ha-icon icon="mdi:weather-windy"></ha-icon> 
        </li>
        <li>
          <ha-icon icon="mdi:gauge"></ha-icon>
          ${this.weatherObj.attributes.pressure}
          <span class="unit">
            ${this.getUnit("air_pressure")}
          </span>
          <ha-icon style="margin-right: 0;" 
              icon="${this.gettrendIcon(this.ptrend)}"></ha-icon>
        </li>
        <li>
          ${this.dewpoint}<span class="unit"> ℉ </span>
          <ha-icon icon="mdi:water-plus"></ha-icon>
        </li>
        <li>
          <ha-icon icon="mdi:cup-water"></ha-icon>
          ${this.rain_today}<span class="unit"> in </span>
        </li>
        ${this.lightning_count > 0
          ? html`
              <li>
                ${this.lightning_count}@${this.lightning_distance}<span class="unit"> mi </span>
                <ha-icon icon="mdi:weather-lightning"></ha-icon>
              </li>
            `
          : html`
              <li>
																${this.uvindex}<span class="unit"> UVx </span>
																<ha-icon icon="mdi:weather-sunny-alert"></ha-icon>
              </li>
            `
          }
        ${next_rising
          ? html`
              <li>
                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                ${next_rising.toLocaleTimeString()}
              </li>
            `
          : ""}
        ${next_setting
          ? html`
              <li>
                ${next_setting.toLocaleTimeString()}
                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
              </li>
            `
          : ""}
      </ul>
    `;
  }

  renderForecast() {
    if (!this.forecast || this.forecast.length === 0) {
      return html``;
    }

    this.numberElements++;
    if (this._config.graph === true)
      return this.renderForecastGraph();
    else
      return this.renderForecastTable();
  }

  renderForecastTable() {
    return html`
      <div class="forecast clear ${this.numberElements > 1 ? "spacer" : ""}">
        ${this.forecast.map(
          forecast => html`
            <div class="day">
              <div class="dayname">
                ${this.getDateString(forecast.datetime)}
              </div>
              <i
                class="icon"
                style="background: none, url('${this.getForecastIcon(
                  forecast.condition.toLowerCase(), forecast.datetime
                )}') no-repeat; background-size: contain;"
              ></i>
              ${forecast.templow !== undefined
                ? html`
                    <div class="highTemp">
                      ${Math.round(forecast.temperature)}/${Math.round(forecast.templow)}
                    </div>
                  `
                : html`
                    <div class="highTemp">
                      ${Math.round(forecast.temperature)}°
                    </div>
                  `}
              ${!this._config.hide_precipitation &&
                forecast.precipitation_probability !== undefined &&
                forecast.precipitation_probability !== null &&
                forecast.precipitation_probability !== 0
                ? html`
                    <div class="precipitation">
                      ${forecast.precipitation_probability}${this.getUnit("precipitation_probability")}
                    </div>
                  `
                : ""}
              ${!this._config.hide_precipitation &&
                forecast.precipitation !== undefined &&
                forecast.precipitation !== null &&
                forecast.precipitation !== 0
                ? html`
                    <div class="precipitation">
                      ${forecast.precipitation}${this.getUnit("precipitation")}
                    </div>
                  `
                : ""}
            </div>
          `
        )}
      </div>
    `;
  }

  renderForecastGraph() {
    this.drawChart();

    return html`
      <div class="clear ${this.numberElements > 1 ? "spacer" : ""}">
        <ha-chart-base id="Chart"></ha-chart-base>
      </div>
      <div class="conditions">
        ${this.forecast
          .map(forecast => html`
                <i class="icon"
                  style="background: none, url('${this.getWeatherIcon(
                    forecast.condition.toLowerCase()
                  )}');"
                ></i>
          `)}
      </div>
    `;
  }
  
  drawChart() {
    if (!this.forecast)
      return;
    
    var that = this;
    var dateTime = [];
    var tempHigh = [];
    var tempLow = [];
    var precip = [];

    for (var i = 0; i < this.forecast.length; i++) {
      var d = this.forecast[i];
      dateTime.push(new Date(d.datetime));
      tempHigh.push(d.temperature);
      tempLow.push(d.templow);
      precip.push(d.precipitation);
    }
    var style = getComputedStyle(document.body);
    var textColor = style.getPropertyValue('--primary-text-color');
    var dividerColor = style.getPropertyValue('--divider-color');
    const chartOptions = {
      type: 'bar',
      data: {
        labels: dateTime,
        datasets: [
          {
            label: this.mode == 'hourly' ?  this.ll('temp') : this.ll('tempHi'),
            type: 'line',
            data: tempHigh,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            lineTension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: this.ll('tempLo'),
            type: 'line',
            data: tempLow,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            lineTension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: this.ll('precip'),
            type: 'bar',
            data: precip,
            yAxisID: 'PrecipAxis',
          },
        ]
      },
      options: {
        animation: {
          duration: 300,
          easing: 'linear',
          onComplete: function () {
            var chartInstance = this.chart,
              ctx = chartInstance.ctx;
            ctx.fillStyle = textColor;
            var fontSize = 10;
            var fontStyle = 'normal';
            var fontFamily = 'Roboto';
            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            var meta = chartInstance.controller.getDatasetMeta(2);
            meta.data.forEach(function (bar, index) {
              var data = (Math.round((chartInstance.data.datasets[2].data[index]) * 10) / 10).toFixed(1);
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            type: 'time',
            maxBarThickness: 15,
            display: false,
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
          {
            id: 'DateAxis',
            position: 'top',
            gridLines: {
              display: true,
              drawBorder: false,
              color: dividerColor,
            },
            ticks: {
              display: true,
              source: 'labels',
              autoSkip: true,
              fontColor: textColor,
              maxRotation: 0,
              callback: function(value, index, values) {
                return that.getDateString.call(that, value);
              },
            },
          }],
          yAxes: [{
            id: 'TempAxis',
            position: 'left',
            gridLines: {
              display: true,
              drawBorder: false,
              color: dividerColor,
              borderDash: [1,3],
            },
            ticks: {
              display: true,
              fontColor: textColor,
            },
            afterFit: function(scaleInstance) {
              scaleInstance.width = 28;
            },
          },
          {
            id: 'PrecipAxis',
            position: 'right',
            gridLines: {
              display: false,
              drawBorder: false,
              color: dividerColor,
            },
            ticks: {
              display: false,
              min: 0,
              suggestedMax: 20,
              fontColor: textColor,
            },
            afterFit: function(scaleInstance) {
              scaleInstance.width = 15;
            },
          }],
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            title: function (items, data) {
              const item = items[0];
              const date = data.labels[item.index];
              return new Date(date).toLocaleDateString(locale, {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              });
            },
            label: function(tooltipItems, data) {
              var label = data.datasets[tooltipItems.datasetIndex].label || '';
              if (data.datasets[2].label == label) {
                return label + ': ' + (tooltipItems.yLabel ?
                  (tooltipItems.yLabel + ' ' + that.getUnit("precipitation")) : ('0 ' + that.getUnit("precipitation")));
              }
              return label + ': ' + tooltipItems.yLabel + ' ' + that.getUnit("temperature");
            },
          },
        },
      },
    };
    this.ChartData = chartOptions;
  }
  
  getWeatherIcon(condition, sun) {
    return `${
      this._config.icons
        ? this._config.icons
        : "https://cdn.jsdelivr.net/gh/bramkragten/weather-card/dist/icons/"
    }${
      sun && sun == "below_horizon"
        ? weatherIconsNight[condition]
        : weatherIconsDay[condition]
    }.png`;
  }

  
  getForecastIcon(condition, fdate) {
    const isun = this.hass.states["sun.sun"];
    let next_rise = new Date(isun.attributes.next_rising);
    let next_set = new Date(isun.attributes.next_setting);
    let sonPosition = this.hass.states["sun.sun"].state;
    let forecast_date = new Date(fdate);

    if (this.mode == "daily") {
						return `${
								this._config.icons
										? this._config.icons
										: "https://cdn.jsdelivr.net/gh/bramkragten/weather-card/dist/icons/"
						}${ weatherIconsDay[condition]	}.png`;
    }
    else {
						return `${
								this._config.icons
										? this._config.icons
										: "https://cdn.jsdelivr.net/gh/bramkragten/weather-card/dist/icons/"
						}${
								isun && sonPosition == "below_horizon"
										? forecast_date > next_rise ? forecast_date < next_set ? weatherIconsDay[condition] : weatherIconsNight[condition] : weatherIconsNight[condition]
										: forecast_date > next_set ? forecast_date < next_rise ? weatherIconsNight[condition] : weatherIconsDay[condition] : weatherIconsDay[condition]
						}.png`;
    }
  }

  gettrendIcon(ptrend) {
    return trendIcon[ptrend];
  }

  getWindDirIcon(degree) {
    return cardinalDirectionsIcon[parseInt((degree + 22.5) / 45.0)];
  }

  getWindDir(degree) {
    if (locale[this.lang] === undefined)
      return locale.en.cardinalDirections[parseInt((degree + 11.25) / 22.5)];
    return locale[this.lang]['cardinalDirections'][parseInt((degree + 11.25) / 22.5)];
  }

  getUnit(measure) {
    const lengthUnit = this.hass.config.unit_system.length;
    switch (measure) {
      case "air_pressure":
        return lengthUnit === "km" ? this.ll('uPress') : "inHg";
      case "length":
        return lengthUnit;
      case "precipitation":
        return lengthUnit === "km" ? this.ll('uPrecip') : "in";
      case "precipitation_probability":
        return lengthUnit === "km" ? this.ll('uPrecipProb') : "%";
      default:
        return this.hass.config.unit_system[measure] || "";
    }
  }

  getDateString(datetime) {
  
    if (this.mode == 'hourly') {
      return new Date(datetime).toLocaleTimeString(this.lang,
                            { hour: 'numeric' });
    }
    return new Date(datetime).toLocaleDateString(this.lang,
                            { weekday: 'short' });
  }

  _handleClick() {
    fireEvent(this, "hass-more-info", { entityId: this._config.entity });
  }

  getCardSize() {
    return this.numberElements || 3;
  }

  renderStyle() {
    return html`
      <style>
        ha-card {
          cursor: pointer;
          margin: 3em, .1em, 3em, .1em;
          padding-top: 1.3em;
          padding-bottom: 1.3em;
          padding-left: .1em;
          padding-right: .1em;
          position: relative;
        }
        .spacer {
          padding-top: 1em;
        }
        .clear {
          clear: both;
        }
        .title {
          position: absolute;
          left: 2.8em;
          top: 0.6em;
          font-weight: 300;
          font-size: 3em;
          color: var(--primary-text-color);
        }
        .temp {
          font-weight: 300;
          font-size: 5.5em;
          color: var(--primary-text-color);
          position: absolute;
          margin-left: 0px;
          left: .2em;
        }
        .tempc {
          font-weight: 300;
          font-size: 1.5em;
          vertical-align: super;
          color: var(--primary-text-color);
          position: absolute;
          left: 5.5em;
          margin-top: -18px;
          margin-left: 7px;
        }
        .feels {
          font-weight: 300;
          font-size: 1.3em;
          color: var(--primary-text-color);
          position: absolute;
          left: 5.3em;
          margin-top: 22px;
          margin-left: 15px;
        }
        .current {
          padding-top: 1.2em;
          /*margin-bottom: 3.5em;*/
          height: 4em;
        }
        .variations {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          font-weight: 300;
          color: var(--primary-text-color);
          list-style: none;
          padding: 0 1em;
          margin: 0;
        }
        .variations ha-icon {
          height: 22px;
          margin-right: 5px;
          color: var(--paper-item-icon-color);
        }
        .variations li {
          flex-basis: auto;
          width: 50%;
        }
        .variations li:nth-child(2n) {
          text-align: right;
        }
        .variations li:nth-child(2n) ha-icon {
          margin-right: 0;
          margin-left: 5px;
        }
        .unit {
          font-size: 0.8em;
        }
        .forecast {
          width: 100%;
          margin: 0 auto;
          display: flex;
          overflow: auto;
          overflow-y: hidden;
        }
        .day {
          flex: 1;
          display: block;
          text-align: center;
          color: var(--primary-text-color);
          line-height: 1.2;
          box-sizing: border-box;
        }
        .dayname {
          text-transform: uppercase;
        }
        .forecast .day:first-child {
          margin-left: 0;
        }
        .forecast .day:nth-last-child(1) {
          border-right: none;
          margin-right: 0;
        }
        .highTemp {
          font-weight: bold;
        }
        .lowTemp {
          color: var(--secondary-text-color);
        }
        .precipitation {
          color: var(--primary-text-color);
          font-weight: 300;
        }
        .icon.bigger {
          width: 10em;
          height: 10em;
          margin-top: -4.7em;
          margin-left: -1em;
          position: absolute;
          right: -.3em;
        }
        .icon {
          width: 50px;
          height: 50px;
          margin-right: 8px;
          margin-bottom: 0px;
          display: inline-flex;
          vertical-align: middle;
          background-size: contain;
          background-position: center center !important;
          background-repeat: no-repeat;
          text-indent: -9999px;
        }
        .weather {
          font-weight: 300;
          font-size: 1.5em;
          color: var(--primary-text-color);
          text-align: left;
          position: absolute;
          top: -0.5em;
          left: 6em;
          word-wrap: break-word;
          width: 30%;
        }
        .conditions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0px -12px 0px 5px;
        }
      </style>
    `;
  }

  ll(str) {
    if (locale[this.lang] === undefined)
      return locale.en[str];
    return locale[this.lang][str];
  }
}

customElements.define("weather-card", WeatherCard);