let goalType;

if ((units == "standard" && clientGoalLbs == "") || (units == "metric" && clientGoalKg == "")) {
    goalType = null;
} else if ((units == "standard" && clientWeightLbs > clientGoalLbs) || (units == "metric" && clientWeightKg > clientGoalKg)) {
    goalType = 'loss';
} else if ((units == "standard" && clientWeightLbs < clientGoalLbs) || (units == "metric" && clientWeightKg < clientGoalKg)) {
    goalType = 'gain';
}

let maxPgHeight = 270;

let vLineX = 22;

let xAxis = 26;

let imgXAxis = 10;

let txtWidth = 160;

let horizontalLWidth = 3;

let scaleImg = "data:image/png;base64,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";

let targetImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABNCAYAAAAxWePoAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz+jEp9E1MJCJIhaiJGYQNDGIsEXqEWM4KtJLi8hlxx3CSK2gm1AQbTxVehfoK1gLQiKIoiVhbWijco5Z4QEMbPMzre/3Rl2Z8EWSimqUeUGNZ3Vg2N+59z8gtP+RC0dNNOLN6wY2tTMaIiy9n5LhRWvXVat8uf+tfpozFCgokZ4WNH0rPC48ORKVrN4S7hVSYajwifCfbpcUPjG0iMFfrY4UeBPi/VQMAC2JmFnooQjJawkdVVYXk6Xmsopv/exXtIQS8/OSOwUb8cgyBh+nEwwQgAfAwzJ7MOFh35ZUSbf/ZM/TUZyFZk1VtFZJkGSLH2i5qR6TGJc9JiMFKtW///21Yh7PYXqDX6ofjTN126wb8JX3jQ/Dkzz6xAqH+A8XczP7MPgm+j5ota1B451OL0oapFtONuAtnstrId/pEpxWzwOL8fQOA8tV1C3WOjZ7z5HdxBak6+6hJ1d6JHzjqVv2bNoGhKb9S4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAgFSURBVHic7ZxrjF1VFcd/cxlJEYpoioGO1WgprBYKYqCDBuRhIo+KYkvEgkl9NFHLF2iLU/HxwQelSDsJRDCRR5qITRWGVKChJopFo5mRBB1p+xdGiNKp2KlRK1YSSscP+8zMnXvv3L3Ouefeuaf2l9xMZmbtvdf+5+y799l7r9XBNGJmpwBnA6fW+JyS/AT4K/BK8rPyMyjpldZ6PkFHqxs0s/cBH0k+5+XgwyjwDPA48JikZxusLxVNF9DMjgM+BFwNLAa6mtzkMEHMx4GfSfpvMxtrmoBmNhO4GVgFvKVZ7UT4F7AR2Cjp1WY0kLuAZjYDuBFYC8zKu/6MjAC3A/dIei3PinMT0Mw6gc8BX6P5wzQrw8A3gfslHcqjwlwENLOrgV5gbh71tYA/Aask/aTRihoS0MxKwLcJw7WI3A58RdLhrBUck7Wgmb0N6AM+nbWOMt4AhoBfAD8GFgDHV9jsA+4E/g50AicBpQbbvRC4YNasWdv279+fabbO9ASa2TnAo8C7s5QnrN1+CWwG+oHd5V/uZvYCcFpFmSFJ88psZhCEXgQsAy4i+4h6Cfi4pN+nLZi6QTO7Hvg+8Oa0ZYGdwA+AH0r6S502ogLWKPNO4HrgU8CZGXw7CKyQtDlNoVQCmlkP4XsjLTuAHkn9znZSC1hRvhtYD1ycysvAWknrvcbu7xAz+ySwLqUzQ8ASSZd4xcsDSf2SLgGWJD6kYZ2ZfcJr7BLQzD4APIj/iT1AeANZIOlRrzN5k7S9IPHlgLNYB7DJzN7vMY4KaGbvAbYCM5wOPA90S+qV9LqzTNOQ9LqkXqCb4JuHGcDWpO91qSugmZ0EPIH/lexJgnhy2reMxKdugo8eTgaeSDSYkikFNLM3EdZ55mzwDmCxpH867VtO4ttigq8eDOhLtKhJvSdwFXCps6FbJPU0sqJvFZIOS+oB1jiLXErQoiY1BTSztwO3Ohu4W9KdTtu2QdIG4G6n+a2JJlVM9QR+AzjRUfFW4CanE+3ITYQ+xDiRoEkVVQKa2VnACkel/cCyIgzbqUh8X0boS4wVZlb1hlPrCdxAfJPhVeDaZm+Xt4KkD9cS+lSPYwjaTGLSwtjMrgS2Odr9kqTveJ0sAmZ2C77Z+UpJ40uhyifQ8w64k7B5eqTRS+hbjEkajQtoZguBhY4KVua1Hd5OJH1a6TA9O5kngMlP4BJH4S2Snk7rXFFI+rbFYTquVbmASx0Fv5vWqQLi6eO4Vh0AZjaP+Iv285LOaMCxwmBmfwROj5jNkzQ09gR6hu8DjblVKB502CyBiSEcG76HgE2NeFQwNhEOuuqxFKDDzLqAPRHjn0q6PA/PioKZbQc+XMdkFJhTIuzYxvhtLl4Vi2ci/+8A5peA2Y7Kfte4P4XD0+fZJXz3WI4KWJsuj4D/Jtwl+X9jiPgGQ1cncQGHgYvNvDv74xyUNJC2UDMws0Vkuwiwh/pHGi4BDXgqQ+NDgOsgvAU8RPVBfR50eSeRo9Rmdon2uUVaRE4uAfun24sCM1IC9k63FwVmbydhlj2vjpGAL2ao/GAml5rDDWSbhe+l/iw8PCZgPbqAHZJGMzjQFmRZTplZB/COiNlwibiAMynO5fE8OQ04IWLjEhDgvY37Uzg8fR72TiJHBazN3hKwy2F4foPOFJF6EyuE/cDdY2ciA9QX6RAwZzrDSluJmZ0KvEz9GxoDkrrHtvQfidTZCSzPw7mCsJz49ZZHYOJMpM9R6Wcb8ahgfMZh0weJgJJeAP4QKXC6mV3UoGNtT9LH2JHmoKQhmHywHhvGEMJYj3Q8fRzXqlxAzzC+zsw+mNqlgpD07TqH6bhWldfbBolfMNoJnNsOIQx5klwkf5Z4mNigpHPGfqm83tbjaOtMQij/kcbN+GLsJmlUFXlkZk8CsUP0/wDzJb3sdi8FjcbKZWhvDrCb6hDbSrZLuqL8D7Wu+K4hfq3heOBhM8uyRdRWJH14mLh4bwCrK/9YJaCk54D7HG0vAjYnUeuFJPF9M6EvMe6TVHWDdarOfx1fcN5Hgbscdu3KXYQ+xDhA0KSKmgJK2gfc5nTixuSCdqEwszX417W3JZpU0Vmn0EbC7aTLHA3ckUTytH24VzJs1+MP9XqKoEVNpvz+StZ5SwlnIh7WANti0Y3TSeLbNvziiRAwPuWat+4EUBbdOOJs8HJgwMzmO+1bRuLTAPEl2hgjwFWx6NPoDCrpReAawJsyaR7Qb2arzexYZ5mmYWbHmtlqQjiXdx35GvAxSS/FDF1LEEm/JuSH8Z7MzSTkeNllZp7b/00haXtX4stMZ7FRYLmk33iM3Ws4SVuAL3vtE+YSFtxPm9kFKctmxsy6zWwHYYGc9kRxraQfeY2z5I1ZRlhoZ80b8xAhb8yf67SRJW/Muwh5Y26gXfPGjJFkLuoDokkZpmAU+BXhLWAA2FUe+enMXHQckzMXXUj2zEUvEjIXDaYtmDn5mJm9lSBAHrf3DxNuwT5H2Bn/AlAZIb4P+B5wFmHLbS6N584C2E6Ie/5HlsJ5ZG/7Fum/G9uFdcBXG1n855k/cCPNuQXaDHLLH5jLToqkx4D5wOeJB+1MJ3sIPloe4kHzcqiuJAzrdrn9OkIYrve2bQ7VSszsBMI2+WqmN4vvBqC3MFl8K0mWG5cxkUc6dueuUfYwkUf654XNIz0VZnYuE5nMz8/Bh1FCLN9YJvOWRlW1XMByklz6C6nOn1/+ger8+eV59Qcl/a21nk/wP59Gel6ZnBd/AAAAAElFTkSuQmCC";

let chartImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz+jEp9E1MJCJIhaiJGYQNDGIsEXqEWM4KtJLi8hlxx3CSK2gm1AQbTxVehfoK1gLQiKIoiVhbWijco5Z4QEMbPMzre/3Rl2Z8EWSimqUeUGNZ3Vg2N+59z8gtP+RC0dNNOLN6wY2tTMaIiy9n5LhRWvXVat8uf+tfpozFCgokZ4WNH0rPC48ORKVrN4S7hVSYajwifCfbpcUPjG0iMFfrY4UeBPi/VQMAC2JmFnooQjJawkdVVYXk6Xmsopv/exXtIQS8/OSOwUb8cgyBh+nEwwQgAfAwzJ7MOFh35ZUSbf/ZM/TUZyFZk1VtFZJkGSLH2i5qR6TGJc9JiMFKtW///21Yh7PYXqDX6ofjTN126wb8JX3jQ/Dkzz6xAqH+A8XczP7MPgm+j5ota1B451OL0oapFtONuAtnstrId/pEpxWzwOL8fQOA8tV1C3WOjZ7z5HdxBak6+6hJ1d6JHzjqVv2bNoGhKb9S4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAH3SURBVHic7d0xTsMwAIXhH5cRNg/ABfABYENCHADOwMIRkECssJRjIMEtQJXY4ACeGYAhJwCpMDQwJzwjq8n75sQOv1IVxW67QmUppT3gFNgFNjue9g48AdOc8+N/XVsXk5qTp5TOgRsgAes9Tl0DtoHjGONH0zTVIq7Umri982ZAEIeaA/u17kT14hWnheYP7VhV1Ay4W3CsnYJj9VIzYNc3jC62Co7VS82Ag+CAIgcUOaDIAUUOKHJAkQOKHFDkgCIHFDmgyAFFDiharX0BtZRaixnlHdiuxcyAI/o9l9wADoFZSukM6q6JfJUcL+fc6W8pvRYzxjuw6FrMGAMWXYsZY8CiazFjDFiUA4ocUOSAIgcUOaDIAUUOKHJA0e/jrGXfaltLgLKPd8YmtHfeJdrLOQBX7Vij8rM9dum32tYSGMhW21oCA9lqW4v/jRE5oMgBRQ4ockCRA4ocUOSAIgcUOaDIAUUOKHJAkQOKHFDkgCIHFDmgyAFFDihyQJEDihxQ5IAiBxQ5oMgBRQ4ockCRA4ocUOSAIgcUOaAoAG8Fx3vtcewg5g0sPihTynOPYwcxbwCuWXyFh2oOTHscP4h5J03TvMQYP4ED/v49MnPgIud81/WEocw7aQd9jDHeA5HFryp0/WWFV+ABOMk53/a9iiHM+w1XV4dQGiby+gAAAABJRU5ErkJggg==";

let flameImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABrCAYAAADgrAXDAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz+jEp9E1MJCJIhaiJGYQNDGIsEXqEWM4KtJLi8hlxx3CSK2gm1AQbTxVehfoK1gLQiKIoiVhbWijco5Z4QEMbPMzre/3Rl2Z8EWSimqUeUGNZ3Vg2N+59z8gtP+RC0dNNOLN6wY2tTMaIiy9n5LhRWvXVat8uf+tfpozFCgokZ4WNH0rPC48ORKVrN4S7hVSYajwifCfbpcUPjG0iMFfrY4UeBPi/VQMAC2JmFnooQjJawkdVVYXk6Xmsopv/exXtIQS8/OSOwUb8cgyBh+nEwwQgAfAwzJ7MOFh35ZUSbf/ZM/TUZyFZk1VtFZJkGSLH2i5qR6TGJc9JiMFKtW///21Yh7PYXqDX6ofjTN126wb8JX3jQ/Dkzz6xAqH+A8XczP7MPgm+j5ota1B451OL0oapFtONuAtnstrId/pEpxWzwOL8fQOA8tV1C3WOjZ7z5HdxBak6+6hJ1d6JHzjqVv2bNoGhKb9S4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAj6SURBVHic5Z17jF1FHcc/ewUKFloKo8JaH1AKPzEVsbS1wYKamGCwvCyJxkcQHwVWKxAJ2lSMmrY+UAyGYiWKBZsopRa21sIfTQyFFgoEY1v4NYYSQZaWHtCtaC0trX/M3O3d7X2cc8/85u62n2Sze/fM+f5mfzszZ848ftOFESLyLmA2MA2YDPQDTwP3Ab9X1X9Z2U5Jl4WoiFwK/AoY1yDJ/4BeYAnwoKq+YZGPFER3oIhcA9xW4JZtwFJgiapujJ0fa6I6UEROATYBb25T4mFgvqo+EC9XtsR24ELgmxGkngQWACtUdX8EPTMqkfUuiKQzGVgObBKRz4rImyLpRie2A11kvTOBu4EtInJZZO0oxHbgnsh6VSYAy0VktYicZmSjLaJWDefcZOCsmJpDOA2Y7Zwb5Zx7NMuyvYa2chG7BK6KrFePUcA8YLOIzExgrymxn8LHAzuAI2LqtuA3wFdV9T8JbQ4QtQSG17NHYmrm4ArgCRF5X2K7QPwqDPBnA81WCPCYiFyd2rCFA/9moJmHo4FFIrJMRMamMnooObDKLGC9iLwzhTELB2430CzKe/BOtOxSATYOHC7vrt3AQyLyUUsjh7IDAcYAq0Xk01YGDnUHAhwFLBWRr1iIWzjwZAPNsnQBt1uURAsHnmGgGYMKcJeIfCK2aGxON9CMxRHAMhE5P5bg4eZA8B3ulSJyTgwxCwd+wEAzNscB94vI28oKRXWgiEwCJsbUNKQbX51LjRzFLoGfjKxnzQzgJ2UEYjtwVmS9FMwRkc+0e3O0AVUROQPQWHqJ2QVMUdXNRW+MWQKviKiVmmOAJe20h1EmlcLTbCn+tWmk0g3szrJsbZGbYpXAecDoSFqd5Dsi8t4iN5RuA0Xk3cAWRnbpq+VxYHreFWMxSuB3OXScBzAF+FrexKVKYCjuf8XmjaaT7ABOyTNV2vYfLiJHA78tozGMeQs5S2GZP/5W4P0l7h/u3CAiY1olasuBIvI54Mvt3DuCOAG4rlWiwm1gaPc20P4q1JFEP74t/GejBIVKoIiMBpZxeDgPYCzwjWYJilbhxfg518OJOSLScOFobgeKyGyg7VGLNnk4fHWSY4EbG13M1QaKyNnAevzavFTswT/lu4CngCMT2h7KLuBUVd029ELLEhgW6txLWucB3KyqT4chplKDnhE4Briq3oU8VfhO4NSo2WnNVuD7NZ+/BzyXOA9DqTun3NSBInI9cKlJdprTo6q7qh/Czz0dyEctp4vIQRNmDR0oItOBH5hmqT731NuppKqr8V2oTnJQKazrQBE5Er8/I3XD3Q9c2+T614GdifJSj0+JyKAHb6MSeCV+b0Zq5qnqS40uhmvzEuZnKOPxM3kDHOTAMMry7VQ5quFxYFGOdLcBTxjnpRmDqnG9EngV8PY0eRnEtaq6r1WikKZZNbdmVu3k0yAHhnfdbyXPEvSq6rq8iVX1EWClYX6a4YCPVT8MLYFzgLcmzQ7sA+a2cd/ccG8nuLz6w4ADw+Bh05EHI+5uZ0JbVTfhR8Q7wbnVH2pL4Cz8IGJKdgM3lbj/pqCRmonVvSi1DrywAxlZpKrPt3uzqv4duD1ifvLSBZwDwYEichQ1DWMidgLzI+jMpzOd6ylwoATOwC86TMmPVfWVsiKqmgE3R8hPUabCAQemrr7bgFsi6v2U9DukBpXAqCvXc7Ag5v7eoBWjOSjCeBE5qSIiE0m7LLcf+LWB7p2kbwunVghPk4Qssdhdrqqv4UNJpeTMCnBSQoP7yTdg0C6W2vU4MbUD16jqFitxVVVgjZV+HZI7MEUJSVkKXQUovdkkJy/gQ95Zcz/wjwR2IHEJXJwiTmCwsdjaTiCZA18H7khgp8odwaY1J1ZIMwKzXFVfTmAHAFXdjo/+Zs3YClD6fTQHnZiOvDeBjawC9Bkb2UvarkWVNcG2JX0pHPiYqiYfblLVfvxCUEuSOPBBY/1O2k7iwKeM9ZvxF2P9vgrworGRF4z1m9H2dEFOXkxRAjvpQGvbfRX8Wjwr9qnqq4b6rXgV27nj5yphBMNq8WJFRBqFg0/BOOx2Um1VVa2KrzAyAp2NZGRpewUc+O9YOvAdhtqtGG+oPciB6wCrd9UPG+nm4SNGutvxuxa8A8OSMauxuo8b6XbSdm91KV5tA2tVjc8SkeTrDUVkPGAV2XfAV7UOXIPdtGDy6LqGNndSMzgy4EBV3Q383MhoT569t7EItqy2RdyqqgODtUP7SD/E5mFyPHCNgW4jevA7LWPzMvCj2l8MihuTZdnrzrn/YrNWZppz7ndZlpkeRhVO1VmKzda0G8Ly4gHq9dJ/iQ9jEpvj8NGBzGIsBO27sFlptoU68zoH/TGqupc4x/rUY4ahNkH7Q0baNwbfDKLhdlcRWWuUmf3AbFWNOksXovT+Apuj3taq6nn1LjSrTtdhc0JNF7BYRL4QS1BErsTOeXuA6xtdbBh8LMuyPufcdsDi0JMuYKZzbrRz7qEsy9qacBeRUc65hcBC7EZdrlbVPza62DR6W5ZlTzrnxgEfjJ4t78RzgUucc+uyLCu0wjTEyV+N345rckIj8DNVXdAsQUvD4Uiyldi+0+4DHsAvyVjVaAlIyMuF+DM7L8A2atKfgJmttp/ljZkwBj9iUyg0XJv04SeDtgLPht9NwO+aP5s044ub8RHc/t0qYe6iHzqoG4h/dtxwYwcwTVVzjdLnrgJB8CLSLAXpFK8AF+V1HhRsQ1R1PX55/6aCGRsJbMQHon20yE2FG+Hw35mO7TRAav6Ab/MKT661FYQ2DDrcEz6ej103wpr9+AicPbVDVEWIEUP1Mvz2gmPLaiXmNeDzqlqqJpUOg5xl2TPOuRX4bsZIiaO/CrhcVUvH5Yp9NOR5+EFZizeXGKzHj6oUihXdDKtD6i/Bn1A9XELlPQPMVdX7YgubvAqFjE4CvoT9CqlmPA98EZhk4TxI8PQMkX6mAhfjO+LWr4Ob8XtFeoEN1me0J+9+iMgEvCMvxg/Yln2QvQGsxTusV1WfbZE+Kh3tv4nICfiq3h2+Th7yvTsk7QtfLw353gds7OQSuv8DXrpmfsVZhWUAAAAASUVORK5CYII=";

let heartImg ="data:image/png;base64,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";

let moonImg = "data:image/png;base64,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";

let flagImg = "data:image/png;base64,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";

function genPDF() {
    
    let doc = new jsPDF();
    
    let yAxis = 20;
    
    let altPdfTitle = clientName + "'s Health Snapshot PDF";
    
    doc.setFontSize(24);
    
    //PDF TITLE--------------------------------------------------------------
    if (pdfTitle != "") {
        doc.text(xAxis, yAxis, pdfTitle);
    } else {
        doc.text(xAxis, yAxis, altPdfTitle);
    }
    
    //DATE--------------------------------------------------------------
    if (document.getElementById("sDate").checked == true) {
        doc.setFontSize(12);
        
        let d = new Date();
        d.setDate(d.getDate());

        let dd = d.getDate();

        let mm = d.getMonth() + 1;

        let yyyy = d.getFullYear();
        
        let formatDate;
        
        if (trainerName !== ""){
            formatDate = "Created by " +  trainerName + " for " + clientName + " on " + mm + "/" + dd + "/" + yyyy;
        } else {
             formatDate = "Created for " + clientName + " on " + mm + "/" + dd + "/" + yyyy;
        }
        
        yAxis += 6;
        doc.text(xAxis, yAxis, formatDate);
        yAxis += 2;
    }
    
    //INTRO NOTES--------------------------------------------------------------
    if (introNotes != "") {
        doc.setFontSize(16);
        
        //splitting strings
        let splitIntro = doc.splitTextToSize(introNotes, txtWidth);
        yAxis += 10;
        
        
        for (i=0; i<splitIntro.length; i++){
            doc.text(xAxis, yAxis, splitIntro[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        }
        
        //doc.text(20, yAxis, splitIntro);
        
        //yAxis += splitIntro.length * 7;
        
        /*yAxis += 10;
        doc.text(20, yAxis, introNotes);*/
    } else {
        yAxis += 2;
        
        if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
        }
    }
    
    //LINE--------------------------------------------------------------------    
    doc.setDrawColor(147, 147, 147);
    doc.setLineWidth(horizontalLWidth);
    doc.setFontSize(16);
    doc.line(xAxis, yAxis, txtWidth, yAxis)
    yAxis += 10;
    
    doc.setDrawColor(0, 0, 0)
    
    yAxis += 5;
    
    if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
    }
    
   //CURRENT/GOAL--------------------------------------------------------------
   if (document.getElementById("sClientGoal").checked == true) {
       let sClientGoalTxt;
       let splitGoalTxt;
       
       if (units == "standard" && clientWeightLbs > clientGoalLbs) {
            let toLoose = Number(clientWeightLbs) - Number(clientGoalLbs);
            sClientGoalTxt = 'Your current weight is ' + clientWeightLbs + ' lbs and your goal weight is ' + clientGoalLbs + ' lbs. To meet this goal you must loose ' + toLoose + ' lbs.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "metric" && clientWeightKg > clientGoalKg) {
            let toLoose = Number(clientWeightKg) - Number(clientGoalKg);
            sClientGoalTxt = 'Your current weight is ' + clientWeightKg + ' kg and your goal weight is ' + clientGoalKg + ' kg. To meet this goal you must loose ' + toLoose + ' kg.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "standard" && clientWeightLbs < clientGoalLbs) {
            let toGain = Number(clientGoalLbs) - Number(clientWeightLbs);
            sClientGoalTxt = 'Your current weight is ' + clientWeightLbs + ' lbs and your goal weight is ' + clientGoalLbs + ' lbs. To meet this goal you must gain ' + toGain + ' lbs.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "metric" && clientWeightKg < clientGoalKg) {
            let toGain = Number(clientGoalKg) - Number(clientWeightKg);
            sClientGoalTxt = 'Your current weight is ' + clientWeightKg + ' kg and your goal weight is ' + clientGoalKg + ' kg. To meet this goal you must gain ' + toGain + ' kg.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       }
       
       /*for (i=0; i<splitGoalTxt.length; i++){
            doc.text(20, yAxis, splitGoalTxt[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        }*/
        
       //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(scaleImg, 'PNG', imgXAxis, yAxis - 5, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis - 5, vLineX, yAxis + 8);
       doc.setLineWidth(horizontalLWidth);
       
       doc.text(xAxis, yAxis, splitGoalTxt);
       yAxis += splitGoalTxt.length * 7;
       
       
       
       if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
   } 
   
   //WEIGHTLOSS/GAIN RATE-----------------------------------------------------
    if (document.getElementById("sWeightChange").checked == true) {
        
        //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(targetImg, 'PNG', imgXAxis, yAxis, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis, vLineX, yAxis + 22);
       doc.setLineWidth(horizontalLWidth);
        
        
        if(goalType == "loss") {
            if (units == "standard") {
                output = "Weightloss Rate: " + document.getElementById('tGoalInput').value + " lbs/week";
            } else {
               output = "Weightloss Rate: " + document.getElementById('tGoalInput').value + " kg/week"; 
            }
            yAxis += 5;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
            doc.text(xAxis, yAxis, output);
            yAxis += 10;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        } else if(goalType == "gain") {
            if (units == "standard") {
                output = "Weight Gain Rate: " + document.getElementById('tGoalInput').value + " lbs/week";
            } else {
               output = "Weight Gain Rate: " + document.getElementById('tGoalInput').value + " kg/week"; 
            }
            yAxis += 5;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
            doc.text(xAxis, yAxis, output);
            yAxis += 10;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        }
        
        
        
        if(goalType == "loss") {
            
            let daysToGoal;
            
            let lossRate = document.getElementById('tGoalInput').value;
            
            if (units == "standard") {
                
                daysToGoal = calcLossGoalDay(lossRate, clientGoalLbs, clientWeightLbs);
                
            } else {
                
                daysToGoal = calcLossGoalDay(lossRate, clientGoalKg, clientWeightKg);
                
            }
    
            let d = new Date();
            d.setDate(d.getDate() + daysToGoal);

            let dd = d.getDate();

            let mm = d.getMonth() + 1;

            let yyyy = d.getFullYear();

            let formatDate = mm + "/" + dd + "/" + yyyy;

            let outputStatement = "";

            if (units == "standard") {
                output = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average deficit of " + Math.round(((lossRate * 3500)/7)) + " calories/day.";
            } else {
                output = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>deficit of " + Math.round((((lossRate * 2.20462) * 3500)/7)) + " calories/day</strong>.";
            }
            
            splitRateTxt = doc.splitTextToSize(output, txtWidth);
            doc.text(xAxis, yAxis, splitRateTxt);
            yAxis += 22;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        } else if(goalType == "gain") {
            
            let daysToGoal;
            
            let gainRate = document.getElementById('tGoalInput').value;
            
            if (units == "standard") {
                
                daysToGoal = calcGainGoalDay(gainRate, clientGoalLbs, clientWeightLbs);
                
            } else {
                
                daysToGoal = calcGainGoalDay(gainRate, clientGoalKg, clientWeightKg);
                
            }
            
            
    
            let d = new Date();
            d.setDate(d.getDate() + daysToGoal);

            let dd = d.getDate();

            let mm = d.getMonth() + 1;

            let yyyy = d.getFullYear();

            let formatDate = mm + "/" + dd + "/" + yyyy;

            let outputStatement = "";

            if (units == "standard") {
                output = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average surplus of " + Math.round(((gainRate * 3500)/7)) + " calories/day.";
            } else {
                output = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average surplus of " + Math.round((((gainRate * 2.20462) * 3500)/7)) + " calories/day.";
            }
            
            splitRateTxt = doc.splitTextToSize(output, txtWidth);
            doc.text(xAxis, yAxis, splitRateTxt);
            yAxis += 22;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        }
        
        
        
        
        
        
    }
    
   //EQUIVALENT ACTIVITIES----------------------------------------------------
    if (document.getElementById("sCalsEquiv").checked == true && goalType == "loss") {
        //console.log('function initialized');
        let boxId;
        let weight;
        let goal;
        let activitySelected = false;
        let activityTotal = 0;
        
        //HEART IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(heartImg, 'PNG', imgXAxis, yAxis - 5, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis - 5, vLineX, yAxis + 14);
       doc.setLineWidth(horizontalLWidth);
        
        if (units = "standard") {
            weight = clientWeightLbs;
            goal = clientGoalLbs;
        } else if (units = "standard") {
            weight = clientWeightKg;
            goal = clientGoalKg;
        }
        
        for(j = 0; j < activityArray.length; j++) {
            
            boxId = "activity" + j;
            
            if(document.getElementById(boxId).checked == true){
                activitySelected = true;
                activityTotal++;
            }
            
        }
        
        if (activitySelected == true) {
            
            if (activityTotal > 1) {
                output = "To reach your goal, the calories needed to be burned are equivalent to the collective hours from one activity below:";
            } else {
                output = "To reach your goal, the calories needed to be burned are equivalent to the collective hours from the activity below:";
            }
            
            splitEquivTxt = doc.splitTextToSize(output, txtWidth);
            doc.text(xAxis, yAxis, splitEquivTxt);
            yAxis += splitEquivTxt.length * 7;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
            doc.setFontSize(12);
        }
        
        for(j = 0; j < activityArray.length; j++) {
            
            boxId = "activity" + j;
            
            if(document.getElementById(boxId).checked == true){
                
                let activityTxt = activityArray[j][1];
                activityTxt = activityTxt.replace('<strong>', '');
                activityTxt = activityTxt.replace('</strong>', '');
                
                output = activityTxt + ' for ' + Math.round(exerciseDurationToGoal(activityArray[j][2], weight, goal) / 60) + ' hours.';
                
               //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);        
                
                doc.text(xAxis + 5, yAxis, output);
                yAxis += 5;
                
                if (yAxis > maxPgHeight){
                    doc.addPage();
                    yAxis = 20;
                }
                
            }
            
        }
        
        if (activitySelected == true) {
            yAxis += 10;
            
            if (yAxis > maxPgHeight){
                    doc.addPage();
                    yAxis = 20;
            }
        }
        
        doc.setFontSize(16);
        
    }
    
    //BMI--------------------------------------------------------------------
    if (document.getElementById("sBmi").checked == true) {
        
        //CHART IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(chartImg, 'PNG', imgXAxis, yAxis - 3, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 10);
       doc.setLineWidth(horizontalLWidth);
        
        let output = 'BMI(Body Mass Index) : ' + calcBmi() + ' (' + calcBmiStatus() + ')';
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        
        doc.text(xAxis, yAxis, output);
        doc.setFontSize(12);
        yAxis += 7;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Underweight: Less Than 18.5');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Normal or Healthy Weight: 18.5 - 24.9');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Overweight: 25 - 29.9');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Obese: 30 or More');
        
        doc.setFontSize(16);
        yAxis += 15;
        
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
   
    }
    
    //BMR--------------------------------------------------------------------
    if (document.getElementById("sBmr").checked == true) {
        
        let output = 'BMR/Calories Burned at Rest : ' + calcBmr() + ' calories/day';
        
       //MOON IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(moonImg, 'PNG', imgXAxis, yAxis - 5, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 1);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, output);
        yAxis += 15;
        
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
    }
    
    //AMR--------------------------------------------------------------------
    if (document.getElementById("sBmr").checked == true) {
        
        let output = 'AMR/Calories Burned Based on Activity :';
        
       //FLAME IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(flameImg, 'PNG', imgXAxis + 1, yAxis - 3, 7, 9);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 7);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, output);
       
        
        doc.setFontSize(12);
        yAxis += 7;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Sedentary (little or no exercise) : ' + calcAmr('sedentary') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Lightly Active (light exercise/sports 1-3 days/week) : ' + calcAmr('light') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Moderately Active (moderate exercise/sports 3-5 days/week) : ' + calcAmr('moderate') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Very Active (hard exercise/sports 6-7 days a week) : ' + calcAmr('very') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Extra Active (very hard exercise/sports & physical job) : ' + calcAmr('extra') + ' calories/day');        
        
        doc.setFontSize(16);
        yAxis += 15;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
    }
    
    //IBW--------------------------------------------------------------------
    if (document.getElementById("sIbw").checked == true) {
        
        let output = 'IBW(Ideal Body Weight) : ' + calcIbw('center');
        
       //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(flagImg, 'PNG', imgXAxis, yAxis - 5, 7, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis - 5, vLineX, yAxis + 14);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, output);
        doc.setFontSize(12);
        yAxis += 7;

        doc.text(xAxis + 5, yAxis, 'Upper Range : ' + calcIbw('upper'));
        yAxis += 5;
        
        doc.text(xAxis + 5, yAxis, 'Lower Range : ' + calcIbw('lower'));
        
        
        doc.setFontSize(16);
        yAxis += 15;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
    }
    
    //OUTRO NOTES--------------------------------------------------------------
    if (outroNotes != "") {
        doc.setFontSize(16);
        
        //HORIZONTAL LINE
        doc.setDrawColor(147, 147, 147);
        doc.line(xAxis, yAxis, txtWidth, yAxis)
        doc.setDrawColor(0, 0, 0);
        
        yAxis += 10;
         if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        
        //splitting strings
        let splitOutro = doc.splitTextToSize(outroNotes, txtWidth);
        
        
       for (i=0; i<splitOutro.length; i++){
            doc.text(xAxis, yAxis, splitOutro[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        } 
        
        
    } else {
        yAxis += 2;
    }

    
   //SET DATE AND CREATE FILE TITLE
    
    let d = new Date();
    d.setDate(d.getDate());
    
    let dd = d.getDate();
    
    let mm = d.getMonth() + 1;
    
    let yyyy = d.getFullYear();
    
    let formatDate = mm + "_" + dd + "_" + yyyy;
    
    
    let pdfSave = clientName.replace(' ', '_') + "_" + formatDate;
    
    doc.save(pdfSave);
}

function genIndPDF() {
    
    let doc = new jsPDF();
    
    let yAxis = 20;
    
    let altPdfTitle = clientName + "'s Health Snapshot PDF";
    
    doc.setFontSize(24);
    
    //PDF TITLE--------------------------------------------------------------
   
    doc.text(xAxis, yAxis, clientName + ' Health Snapshot');
   
    
    //DATE--------------------------------------------------------------
   
        doc.setFontSize(12);
        
        let da = new Date();
        da.setDate(da.getDate());

        let dda = da.getDate();

        let mma = da.getMonth() + 1;

        let yyyya = da.getFullYear();
        
        let formatDate;
        
        
        formatDateA = "Created on" + mma + "/" + dda + "/" + yyyya + " for " + clientName;
        
        
        
        yAxis += 6;
        doc.text(xAxis, yAxis, formatDateA);
        yAxis += 2;
    
    
    //INTRO NOTES--------------------------------------------------------------
    if (introNotes != "") {
        doc.setFontSize(16);
        
        //splitting strings
        let splitIntro = doc.splitTextToSize(introNotes, txtWidth);
        yAxis += 10;
        
        
        for (i=0; i<splitIntro.length; i++){
            doc.text(xAxis, yAxis, splitIntro[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        }
        
        //doc.text(20, yAxis, splitIntro);
        
        //yAxis += splitIntro.length * 7;
        
        /*yAxis += 10;
        doc.text(20, yAxis, introNotes);*/
    } else {
        yAxis += 2;
        
        if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
        }
    }
    
    //LINE--------------------------------------------------------------------    
    doc.setDrawColor(147, 147, 147);
    doc.setLineWidth(horizontalLWidth);
    doc.setFontSize(16);
    doc.line(xAxis, yAxis, txtWidth, yAxis)
    yAxis += 10;
    
    doc.setDrawColor(0, 0, 0)
    
    yAxis += 5;
    
    if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
    }
    
   //CURRENT/GOAL--------------------------------------------------------------
   
       let sClientGoalTxt;
       let splitGoalTxt;
       
       if (units == "standard" && clientWeightLbs > clientGoalLbs) {
            let toLoose = Number(clientWeightLbs) - Number(clientGoalLbs);
            sClientGoalTxt = 'Your current weight is ' + clientWeightLbs + ' lbs and your goal weight is ' + clientGoalLbs + ' lbs. To meet this goal you must loose ' + toLoose + ' lbs.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "metric" && clientWeightKg > clientGoalKg) {
            let toLoose = Number(clientWeightKg) - Number(clientGoalKg);
            sClientGoalTxt = 'Your current weight is ' + clientWeightKg + ' kg and your goal weight is ' + clientGoalKg + ' kg. To meet this goal you must loose ' + toLoose + ' kg.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "standard" && clientWeightLbs < clientGoalLbs) {
            let toGain = Number(clientGoalLbs) - Number(clientWeightLbs);
            sClientGoalTxt = 'Your current weight is ' + clientWeightLbs + ' lbs and your goal weight is ' + clientGoalLbs + ' lbs. To meet this goal you must gain ' + toGain + ' lbs.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       } else if (units == "metric" && clientWeightKg < clientGoalKg) {
            let toGain = Number(clientGoalKg) - Number(clientWeightKg);
            sClientGoalTxt = 'Your current weight is ' + clientWeightKg + ' kg and your goal weight is ' + clientGoalKg + ' kg. To meet this goal you must gain ' + toGain + ' kg.';
           
           splitGoalTxt = doc.splitTextToSize(sClientGoalTxt, txtWidth);
       }
       
       /*for (i=0; i<splitGoalTxt.length; i++){
            doc.text(20, yAxis, splitGoalTxt[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        }*/
        
       //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(scaleImg, 'PNG', imgXAxis, yAxis - 5, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis - 5, vLineX, yAxis + 8);
       doc.setLineWidth(horizontalLWidth);
       
       doc.text(xAxis, yAxis, splitGoalTxt);
       yAxis += splitGoalTxt.length * 7;
       
       
       
       if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
   
   
   //WEIGHTLOSS/GAIN RATE-----------------------------------------------------

        
        //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(targetImg, 'PNG', imgXAxis, yAxis, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis, vLineX, yAxis + 22);
       doc.setLineWidth(horizontalLWidth);
        
        let outputRate = ""
        
        if(goalType == "loss") {
            if (units == "standard") {
                outputRate = "Weightloss Rate: " + 2 + " lbs/week";
            } else {
               outputRate = "Weightloss Rate: " + 0.907185 + " kg/week"; 
            }
            yAxis += 5;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
            doc.text(xAxis, yAxis, outputRate);
            yAxis += 10;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        } else if(goalType == "gain") {
            if (units == "standard") {
                outputRate = "Weight Gain Rate: " + 2 + " lbs/week";
            } else {
               outputRate = "Weight Gain Rate: " + 0.907185 + " kg/week"; 
            }
            yAxis += 5;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
            doc.text(xAxis, yAxis, outputRate);
            yAxis += 10;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        }
        
        
        
        if(goalType == "loss") {
            
            let daysToGoal;
            
            //let lossRate = document.getElementById('tGoalInput').value;
            
            if (units == "standard") {
                
                daysToGoal = calcLossGoalDay(2, clientGoalLbs, clientWeightLbs);
                
            } else {
                
                daysToGoal = calcLossGoalDay(0.907185, clientGoalKg, clientWeightKg);
                
            }
    
            let d = new Date();
            d.setDate(d.getDate() + daysToGoal);

            let dd = d.getDate();

            let mm = d.getMonth() + 1;

            let yyyy = d.getFullYear();

            let formatDate = mm + "/" + dd + "/" + yyyy;

            let outputProject = "";

            if (units == "standard") {
                outputProject = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average deficit of " + Math.round(((2 * 3500)/7)) + " calories/day.";
            } else {
                outputProject = "You are projected to reach your <strong>goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days</strong> with an average <strong>deficit of " + Math.round((((0.907185 * 2.20462) * 3500)/7)) + " calories/day</strong>.";
            }
            
            splitRateTxt = doc.splitTextToSize(outputProject, txtWidth);
            doc.text(xAxis, yAxis, splitRateTxt);
            yAxis += 22;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        } else if(goalType == "gain") {
            
            let daysToGoal;
            
            //let gainRate = document.getElementById('tGoalInput').value;
            
            if (units == "standard") {
                
                daysToGoal = calcGainGoalDay(2, clientGoalLbs, clientWeightLbs);
                
            } else {
                
                daysToGoal = calcGainGoalDay(0.907185, clientGoalKg, clientWeightKg);
                
            }
            
            
    
            let d = new Date();
            d.setDate(d.getDate() + daysToGoal);

            let dd = d.getDate();

            let mm = d.getMonth() + 1;

            let yyyy = d.getFullYear();

            let formatDate = mm + "/" + dd + "/" + yyyy;

            let outputStatement = "";
            
            let outputProject = "";

            if (units == "standard") {
                outputProject = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average surplus of " + Math.round(((2 * 3500)/7)) + " calories/day.";
            } else {
                outputProject = "You are projected to reach your goal weight on " + formatDate + " in " + Math.round(daysToGoal) + " days with an average surplus of " + Math.round((((0.907185 * 2.20462) * 3500)/7)) + " calories/day.";
            }
            
            splitRateTxt = doc.splitTextToSize(outputProject, txtWidth);
            doc.text(xAxis, yAxis, splitRateTxt);
            yAxis += 22;
            
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
            
        }
        
        
        
        
        
        
    
    

    
    //BMI--------------------------------------------------------------------
    
        
        //CHART IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(chartImg, 'PNG', imgXAxis, yAxis - 3, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 10);
       doc.setLineWidth(horizontalLWidth);
    
        let calculatedBmi = calcBmi();
        
        let outputBmi = 'BMI(Body Mass Index) : ' + calculatedBmi + ' (' + calcBmiStatus() + ')';
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        
        doc.text(xAxis, yAxis, outputBmi);
        doc.setFontSize(12);
        yAxis += 7;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Underweight: Less Than 18.5');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Normal or Healthy Weight: 18.5 - 24.9');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Overweight: 25 - 29.9');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
         //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth);  
        doc.text(xAxis + 5, yAxis, 'Obese: 30 or More');
        
        doc.setFontSize(16);
        yAxis += 15;
        
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
   
  
    
    //BMR--------------------------------------------------------------------
   
        
        let outputBmr = 'BMR/Calories Burned at Rest : ' + calcBmr() + ' calories/day';
        
       //MOON IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(moonImg, 'PNG', imgXAxis, yAxis - 5, 8, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 1);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, outputBmr);
        yAxis += 15;
        
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
   
    
    //AMR--------------------------------------------------------------------
    
        
        let outputAmr = 'AMR/Calories Burned Based on Activity :';
        
       //FLAME IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(flameImg, 'PNG', imgXAxis + 1, yAxis - 3, 7, 9);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis -5 , vLineX, yAxis + 7);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, outputAmr);
       
        
        doc.setFontSize(12);
        yAxis += 7;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Sedentary (little or no exercise) : ' + calcAmr('sedentary') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Lightly Active (light exercise/sports 1-3 days/week) : ' + calcAmr('light') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Moderately Active (moderate exercise/sports 3-5 days/week) : ' + calcAmr('moderate') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Very Active (hard exercise/sports 6-7 days a week) : ' + calcAmr('very') + ' calories/day');
        yAxis += 5;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
        //VERTICAL LINE
               //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
               doc.setLineWidth(0.1);
               doc.setLineWidth(1.2);
               doc.line(vLineX, yAxis - 5, vLineX, yAxis);
               doc.setLineWidth(horizontalLWidth); 
        doc.text(xAxis + 5, yAxis, 'Extra Active (very hard exercise/sports & physical job) : ' + calcAmr('extra') + ' calories/day');        
        
        doc.setFontSize(16);
        yAxis += 15;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        
  
    
    //IBW--------------------------------------------------------------------
   
        
        let outputIbw = 'IBW(Ideal Body Weight) : ' + calcIbw('center');
        
       //SCALE IMG
       //(base64 variable, file type, x-axis, y-axis, width, height)
       doc.addImage(flagImg, 'PNG', imgXAxis, yAxis - 5, 7, 8);
       
       //VERTICAL LINE
       //(pointA(x-axis), pointA(y-axis), pointB(x-axis), pointB(y-axis))
       doc.setLineWidth(0.1);
       doc.setLineWidth(1.2);
       doc.line(vLineX, yAxis - 5, vLineX, yAxis + 14);
       doc.setLineWidth(horizontalLWidth);
        
        doc.text(xAxis, yAxis, outputIbw);
        doc.setFontSize(12);
        yAxis += 7;
        
        
        //console.log(yAxis);
        
        doc.text(xAxis + 5, yAxis, 'Upper Range : ' + calcIbw('upper'));
        yAxis += 5;
        
        doc.text(xAxis + 5, yAxis, 'Lower Range : ' + calcIbw('lower'));
        
        
        doc.setFontSize(16);
        yAxis += 15;
        if (yAxis > maxPgHeight){
            doc.addPage();
            yAxis = 20;
        }
        

    //OUTRO NOTES--------------------------------------------------------------
    if (outroNotes != "") {
        doc.setFontSize(16);
        
        //HORIZONTAL LINE
        doc.setDrawColor(147, 147, 147);
        doc.line(xAxis, yAxis, txtWidth, yAxis)
        doc.setDrawColor(0, 0, 0);
        
        yAxis += 10;
         if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        
        //splitting strings
        let splitOutro = doc.splitTextToSize(outroNotes, txtWidth);
        
        
       for (i=0; i<splitOutro.length; i++){
            doc.text(xAxis, yAxis, splitOutro[i]);
            yAxis +=7;
            if (yAxis > maxPgHeight){
                doc.addPage();
                yAxis = 20;
            }
        } 
        
        
    } else {
        yAxis += 2;
    }

    
   //SET DATE AND CREATE FILE TITLE
    
    let db = new Date();
    db.setDate(db.getDate());
    
    let ddb = db.getDate();
    
    let mmb = db.getMonth() + 1;
    
    let yyyyb = db.getFullYear();
    
    let formatDateB = mmb + "_" + ddb + "_" + yyyyb;
    
    
    let pdfSave = clientName.replace(' ', '_') + "_" + formatDateB;
    
    doc.save(pdfSave);
}