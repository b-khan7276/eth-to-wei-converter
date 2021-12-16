function jsRequired() {
    document.getElementById("jsmissing").style.display = "none";
	document.getElementById("jsavailable").style.display = "block";
}

BigNumber.config({ DECIMAL_PLACES: 30 });

var Units = {}

var rawUnits ={
  "wei":          "1",
  "kwei":         "1000",
  "Kwei":         "1000",
  "babbage":      "1000",
  "femtoether":   "1000",
  "mwei":         "1000000",
  "Mwei":         "1000000",
  "lovelace":     "1000000",
  "picoether":    "1000000",
  "gwei":         "1000000000",
  "Gwei":         "1000000000",
  "shannon":      "1000000000",
  "nanoether":    "1000000000",
  "nano":         "1000000000",
  "szabo":        "1000000000000",
  "microether":   "1000000000000",
  "micro":        "1000000000000",
  "finney":       "1000000000000000",
  "milliether":   "1000000000000000",
  "milli":        "1000000000000000",
  "ether":        "1000000000000000000",
  "eth":          "1000000000000000000",
  "kether":       "1000000000000000000000",
  "grand":        "1000000000000000000000",
  "mether":       "1000000000000000000000000",
  "gether":       "1000000000000000000000000000",
  "tether":       "1000000000000000000000000000000"
}

var units = {}

Object.keys(rawUnits).map(function (unit) {
  units[unit] = new BigNumber(rawUnits[unit], 10)
})

Units.units = rawUnits

var re = RegExp(/^[0-9]+\.?[0-9]*$/)

Units.convert = function (value, from, to) {
  if (!re.test(value)) {
    throw new Error('Unsupported value')
  }

  from = from.toLowerCase()
  if (!units[from]) {
    throw new Error('Unsupported input unit')
  }

  to = to.toLowerCase()
  if (!units[to]) {
    throw new Error('Unsupported output unit')
  }

  return new BigNumber(value, 10).mul(units[from]).round(0, BigNumber.ROUND_DOWN).div(units[to]).toString(10)
}

function lengthConverter(source,valNum) {
  if (!re.test(valNum)) {
    document.getElementById(source).value="";
  } else {
		var inputWei = document.getElementById("wei");
	  var inputGwei = document.getElementById("gwei");
	  var inputEther = document.getElementById("ether");
	  if (source=="wei") {
		inputGwei.value=Units.convert(valNum, 'wei', 'gwei');
		inputEther.value=Units.convert(valNum, 'wei', 'ether');
	  }
	  if (source=="gwei") {
		inputWei.value=Units.convert(valNum, 'gwei', 'wei');
		inputEther.value=Units.convert(valNum, 'gwei', 'ether');
	  }
	  if (source=="ether") {
		inputWei.value=Units.convert(valNum, 'ether', 'wei');
		inputGwei.value=Units.convert(valNum, 'ether', 'gwei');
	  }  
  }

}

function extendedLengthConverter(source,valNum) {
	if (!re.test(valNum)) {
		document.getElementById(source).value="";
	} else {
		  var inputWei = document.getElementById("wei");
		  var inputKwei = document.getElementById("kwei");
		  var inputMwei = document.getElementById("mwei");
		  var inputGwei = document.getElementById("gwei");
		  var inputSzabo = document.getElementById("szabo");
		  var inputFinney = document.getElementById("finney");
		  var inputEther = document.getElementById("ether");
		  var inputKether = document.getElementById("kether");
		  var inputMether = document.getElementById("mether");
		  var inputGether = document.getElementById("gether");
		  var inputTether = document.getElementById("tether");
		  if (source=="wei") {
			inputKwei.value=Units.convert(valNum, 'wei', 'kwei');
			inputMwei.value=Units.convert(valNum, 'wei', 'mwei');
			inputGwei.value=Units.convert(valNum, 'wei', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'wei', 'szabo');
			inputFinney.value=Units.convert(valNum, 'wei', 'finney');
			inputEther.value=Units.convert(valNum, 'wei', 'ether');
			inputKether.value=Units.convert(valNum, 'wei', 'kether');
			inputMether.value=Units.convert(valNum, 'wei', 'mether');
			inputGether.value=Units.convert(valNum, 'wei', 'gether');
			inputTether.value=Units.convert(valNum, 'wei', 'tether');
		  }
		  if (source=="kwei") {
			inputWei.value=Units.convert(valNum, 'kwei', 'wei');
			inputMwei.value=Units.convert(valNum, 'kwei', 'mwei');
			inputGwei.value=Units.convert(valNum, 'kwei', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'kwei', 'szabo');
			inputFinney.value=Units.convert(valNum, 'kwei', 'finney');
			inputEther.value=Units.convert(valNum, 'kwei', 'ether');
			inputKether.value=Units.convert(valNum, 'kwei', 'kether');
			inputMether.value=Units.convert(valNum, 'kwei', 'mether');
			inputGether.value=Units.convert(valNum, 'kwei', 'gether');
			inputTether.value=Units.convert(valNum, 'kwei', 'tether')
		  }
		  if (source=="mwei") {
			inputWei.value=Units.convert(valNum, 'mwei', 'wei');
			inputKwei.value=Units.convert(valNum, 'mwei', 'kwei');
			inputGwei.value=Units.convert(valNum, 'mwei', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'mwei', 'szabo');
			inputFinney.value=Units.convert(valNum, 'mwei', 'finney');
			inputEther.value=Units.convert(valNum, 'mwei', 'ether');
			inputKether.value=Units.convert(valNum, 'mwei', 'kether');
			inputMether.value=Units.convert(valNum, 'mwei', 'mether');
			inputGether.value=Units.convert(valNum, 'mwei', 'gether');
			inputTether.value=Units.convert(valNum, 'mwei', 'tether')
		  }
		  if (source=="gwei") {
			inputWei.value=Units.convert(valNum, 'gwei', 'wei');
			inputKwei.value=Units.convert(valNum, 'gwei', 'kwei');
			inputMwei.value=Units.convert(valNum, 'gwei', 'mwei');
			inputSzabo.value=Units.convert(valNum, 'gwei', 'szabo');
			inputFinney.value=Units.convert(valNum, 'gwei', 'finney');
			inputEther.value=Units.convert(valNum, 'gwei', 'ether');
			inputKether.value=Units.convert(valNum, 'gwei', 'kether');
			inputMether.value=Units.convert(valNum, 'gwei', 'mether');
			inputGether.value=Units.convert(valNum, 'gwei', 'gether');
			inputTether.value=Units.convert(valNum, 'gwei', 'tether')
		  }
		  if (source=="szabo") {
			inputWei.value=Units.convert(valNum, 'szabo', 'wei');
			inputKwei.value=Units.convert(valNum, 'szabo', 'kwei');
			inputMwei.value=Units.convert(valNum, 'szabo', 'mwei');
			inputGwei.value=Units.convert(valNum, 'szabo', 'gwei');
			inputFinney.value=Units.convert(valNum, 'szabo', 'finney');
			inputEther.value=Units.convert(valNum, 'szabo', 'ether');
			inputKether.value=Units.convert(valNum, 'szabo', 'kether');
			inputMether.value=Units.convert(valNum, 'szabo', 'mether');
			inputGether.value=Units.convert(valNum, 'szabo', 'gether');
			inputTether.value=Units.convert(valNum, 'szabo', 'tether')
		  }
		  if (source=="finney") {
			inputWei.value=Units.convert(valNum, 'finney', 'wei');
			inputKwei.value=Units.convert(valNum, 'finney', 'kwei');
			inputMwei.value=Units.convert(valNum, 'finney', 'mwei');
			inputGwei.value=Units.convert(valNum, 'finney', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'finney', 'szabo');
			inputEther.value=Units.convert(valNum, 'finney', 'ether');
			inputKether.value=Units.convert(valNum, 'finney', 'kether');
			inputMether.value=Units.convert(valNum, 'finney', 'mether');
			inputGether.value=Units.convert(valNum, 'finney', 'gether');
			inputTether.value=Units.convert(valNum, 'finney', 'tether')
		  }
		  if (source=="ether") {
			inputWei.value=Units.convert(valNum, 'ether', 'wei');
			inputKwei.value=Units.convert(valNum, 'ether', 'kwei');
			inputMwei.value=Units.convert(valNum, 'ether', 'mwei');
			inputGwei.value=Units.convert(valNum, 'ether', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'ether', 'szabo');
			inputFinney.value=Units.convert(valNum, 'ether', 'finney');
			inputKether.value=Units.convert(valNum, 'ether', 'kether');
			inputMether.value=Units.convert(valNum, 'ether', 'mether');
			inputGether.value=Units.convert(valNum, 'ether', 'gether');
			inputTether.value=Units.convert(valNum, 'ether', 'tether')
		  }
		  if (source=="kether") {
			inputWei.value=Units.convert(valNum, 'kether', 'wei');
			inputKwei.value=Units.convert(valNum, 'kether', 'kwei');
			inputMwei.value=Units.convert(valNum, 'kether', 'mwei');
			inputGwei.value=Units.convert(valNum, 'kether', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'kether', 'szabo');
			inputFinney.value=Units.convert(valNum, 'kether', 'finney');
			inputEther.value=Units.convert(valNum, 'kether', 'ether');
			inputMether.value=Units.convert(valNum, 'kether', 'mether');
			inputGether.value=Units.convert(valNum, 'kether', 'gether');
			inputTether.value=Units.convert(valNum, 'kether', 'tether')
		  }
		  if (source=="mether") {
			inputWei.value=Units.convert(valNum, 'mether")', 'wei');
			inputKwei.value=Units.convert(valNum, 'mether")', 'kwei');
			inputMwei.value=Units.convert(valNum, 'mether")', 'mwei');
			inputGwei.value=Units.convert(valNum, 'mether")', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'mether")', 'szabo');
			inputFinney.value=Units.convert(valNum, 'mether")', 'finney');
			inputEther.value=Units.convert(valNum, 'mether")', 'ether');
			inputKether.value=Units.convert(valNum, 'mether")', 'kether');
			inputGether.value=Units.convert(valNum, 'mether")', 'gether');
			inputTether.value=Units.convert(valNum, 'mether")', 'tether')
		  }
		  if (source=="gether") {
			inputWei.value=Units.convert(valNum, 'gether', 'wei');
			inputKwei.value=Units.convert(valNum, 'gether', 'kwei');
			inputMwei.value=Units.convert(valNum, 'gether', 'mwei');
			inputGwei.value=Units.convert(valNum, 'gether', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'gether', 'szabo');
			inputFinney.value=Units.convert(valNum, 'gether', 'finney');
			inputEther.value=Units.convert(valNum, 'gether', 'ether');
			inputKether.value=Units.convert(valNum, 'gether', 'kether');
			inputMether.value=Units.convert(valNum, 'gether', 'mether');
			inputTether.value=Units.convert(valNum, 'gether', 'tether')
		  }
		  if (source=="tether") {
			inputWei.value=Units.convert(valNum, 'tether', 'wei');
			inputKwei.value=Units.convert(valNum, 'tether', 'kwei');
			inputMwei.value=Units.convert(valNum, 'tether', 'mwei');
			inputGwei.value=Units.convert(valNum, 'tether', 'gwei');
			inputSzabo.value=Units.convert(valNum, 'tether', 'szabo');
			inputFinney.value=Units.convert(valNum, 'tether', 'finney');
			inputEther.value=Units.convert(valNum, 'tether', 'ether');
			inputKether.value=Units.convert(valNum, 'tether', 'kether');
			inputMether.value=Units.convert(valNum, 'tether', 'mether');
			inputGether.value=Units.convert(valNum, 'tether', 'gether');
		  }
	}

}