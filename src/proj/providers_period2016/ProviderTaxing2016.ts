﻿import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { PropsTaxing2014 } from '../props/PropsTaxing2014';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import {HistoryConstTaxing2016, HistoryConstTaxing2016var05} from './HistoryConstTaxing2016';
import bigDecimal = require('js-big-decimal');
import {HistoryConstHealth2013var08} from "../providers_period2013/HistoryConstHealth2013";

export class ProviderTaxing2016 extends ProviderBase implements IProviderTaxing {
  constructor() {
    super(VersionId.get(HistoryConstTaxing2016.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsTaxing {
    return new PropsTaxing2014(
      this.Version(),
      this.AllowancePayer(period),
      this.AllowanceDisab1st(period),
      this.AllowanceDisab2nd(period),
      this.AllowanceDisab3rd(period),
      this.AllowanceStudy(period),
      this.AllowanceChild1st(period),
      this.AllowanceChild2nd(period),
      this.AllowanceChild3rd(period),
      this.FactorAdvances(period),
      this.FactorWithhold(period),
      this.FactorSolidary(period),
      this.FactorTaxRate2(period),
      this.MinAmountOfTaxBonus(period),
      this.MaxAmountOfTaxBonus(period),
      this.MarginIncomeOfTaxBonus(period),
      this.MarginIncomeOfRounding(period),
      this.MarginIncomeOfWithhold(period),
      this.MarginIncomeOfSolidary(period),
      this.MarginIncomeOfTaxRate2(period),
      this.MarginIncomeOfWthEmp(period),
      this.MarginIncomeOfWthAgr(period),
    );
  }

  AllowancePayer(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_PAYER;
  }
  AllowanceDisab1st(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_DISAB_1ST;
  }
  AllowanceDisab2nd(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_DISAB_2ND;
  }
  AllowanceDisab3rd(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_DISAB_3RD;
  }
  AllowanceStudy(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_STUDY;
  }
  AllowanceChild1st(period: IPeriod): number {
    return HistoryConstTaxing2016.ALLOWANCE_CHILD_1ST;
  }
  AllowanceChild2nd(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2016, 5)) {
      return HistoryConstTaxing2016var05.ALLOWANCE_CHILD_2ND
    }
    return HistoryConstTaxing2016.ALLOWANCE_CHILD_2ND;
  }
  AllowanceChild3rd(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2016, 5)) {
      return HistoryConstTaxing2016var05.ALLOWANCE_CHILD_3RD
    }
    return HistoryConstTaxing2016.ALLOWANCE_CHILD_3RD;
  }
  FactorAdvances(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2016.FACTOR_ADVANCES;
  }
  FactorWithhold(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2016.FACTOR_WITHHOLD;
  }
  FactorSolidary(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2016.FACTOR_SOLIDARY;
  }
  FactorTaxRate2(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2016.FACTOR_TAXRATE2;
  }
  MinAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2016.MIN_AMOUNT_OF_TAXBONUS;
  }
  MaxAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2016.MAX_AMOUNT_OF_TAXBONUS;
  }
  MarginIncomeOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_TAXBONUS;
  }
  MarginIncomeOfRounding(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_ROUNDING;
  }
  MarginIncomeOfWithhold(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_WITHHOLD;
  }
  MarginIncomeOfSolidary(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_SOLIDARY;
  }
  MarginIncomeOfTaxRate2(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_TAXRATE2;
  }
  MarginIncomeOfWthEmp(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_WHT_EMP;
  }
  MarginIncomeOfWthAgr(period: IPeriod): number {
    return HistoryConstTaxing2016.MARGIN_INCOME_OF_WHT_AGR;
  }
}
