﻿import { VersionId } from '../service_types/versionid';
import { IPeriod } from '../service_types/period';
import { ProviderBase } from '../providers/ProviderBase';
import { IProviderTaxing } from '../providers/IProviderTaxing';
import { PropsTaxing } from '../props/PropsTaxing';
import { IPropsTaxing } from '../service_interfaces/IPropsTaxing';
import {HistoryConstTaxing2017, HistoryConstTaxing2017var07} from './HistoryConstTaxing2017';
import bigDecimal = require('js-big-decimal');
import {HistoryConstHealth2013var08} from "../providers_period2013/HistoryConstHealth2013";

export class ProviderTaxing2017 extends ProviderBase implements IProviderTaxing {
  constructor() {
    super(VersionId.get(HistoryConstTaxing2017.VERSION_CODE));
  }
  GetProps(period: IPeriod): IPropsTaxing {
    return new PropsTaxing(
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
      this.FactorSolitary(period),
      this.MinAmountOfTaxBonus(period),
      this.MaxAmountOfTaxBonus(period),
      this.MarginIncomeOfTaxBonus(period),
      this.MarginIncomeOfRounding(period),
      this.MarginIncomeOfWithhold(period),
      this.MarginIncomeOfSolitary(period),
      this.MarginIncomeOfWthEmp(period),
      this.MarginIncomeOfWthAgr(period),
    );
  }

  AllowancePayer(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_PAYER;
  }
  AllowanceDisab1st(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_DISAB_1ST;
  }
  AllowanceDisab2nd(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_DISAB_2ND;
  }
  AllowanceDisab3rd(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_DISAB_3RD;
  }
  AllowanceStudy(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_STUDY;
  }
  AllowanceChild1st(period: IPeriod): number {
    return HistoryConstTaxing2017.ALLOWANCE_CHILD_1ST;
  }
  AllowanceChild2nd(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2017, 7)) {
      return HistoryConstTaxing2017var07.ALLOWANCE_CHILD_2ND
    }
    return HistoryConstTaxing2017.ALLOWANCE_CHILD_2ND;
  }
  AllowanceChild3rd(period: IPeriod): number {
    if (this.IsPeriodGreaterOrEqualThan(period, 2017, 7)) {
      return HistoryConstTaxing2017var07.ALLOWANCE_CHILD_3RD
    }
    return HistoryConstTaxing2017.ALLOWANCE_CHILD_3RD;
  }
  FactorAdvances(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2017.FACTOR_ADVANCES;
  }
  FactorWithhold(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2017.FACTOR_WITHHOLD;
  }
  FactorSolitary(period: IPeriod): bigDecimal {
    return HistoryConstTaxing2017.FACTOR_SOLITARY;
  }
  MinAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2017.MIN_AMOUNT_OF_TAXBONUS;
  }
  MaxAmountOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2017.MAX_AMOUNT_OF_TAXBONUS;
  }
  MarginIncomeOfTaxBonus(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_TAXBONUS;
  }
  MarginIncomeOfRounding(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_ROUNDING;
  }
  MarginIncomeOfWithhold(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_WITHHOLD;
  }
  MarginIncomeOfSolitary(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_SOLITARY;
  }
  MarginIncomeOfWthEmp(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_WHT_EMP;
  }
  MarginIncomeOfWthAgr(period: IPeriod): number {
    return HistoryConstTaxing2017.MARGIN_INCOME_OF_WHT_AGR;
  }
}
